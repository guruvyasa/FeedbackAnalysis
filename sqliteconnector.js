const sqlite3 = require("sqlite3");
const crypto = require("crypto");

class DBHandler{
    constructor(){
        this.db = new sqlite3.Database("test.db");
        this.db.run(`
        create table if not exists feedback(id varchar(100) primary key,clientname varchar(200) not
        null,feedback text not null,sentiment varchar(30) not null)
    `);
    }

    getUniqueId(){
        return crypto.randomBytes(16).toString("hex");
    }

    saveData(clientName,feedback,sentiment){
        return new Promise((resolve,reject)=>{
            let stmt = this.db.prepare('insert into feedback values(?,?,?,?)');
            stmt.run(this.getUniqueId(),clientName,feedback,sentiment)
            stmt.finalize();
            resolve(sentiment);
        });
        
    }

    closeConnection(){
        this.db.close();
        this.db = null;
    }

    getData(){
        return new Promise((resolve,reject)=>{
            let data = [];
            this.db.all('select * from feedback',(err,rows)=>{
                // console.log(rows);
                resolve(rows);
    });
            
        })
        

    }



}

exports.dbhandler = DBHandler;

// db.serialize(()=>{

    

    
//     db.each('select * from user',(err,row)=>{
//         console.log(`${row.id},${row.name}`);
//     });
    
//     db.close();
    
// });
