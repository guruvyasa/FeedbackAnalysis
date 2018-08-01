let printSomething = function(string){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(string);
            resolve();
            },Math.floor(Math.random()*100)+1);
           })
          }
          
let printSomethingWithoutPromise = function(string){
    setTimeout(()=>{
            console.log(string);
            
            },Math.floor(Math.random()*100)+1);
    }
    

let printInOrder = function(){
    printSomething("A").then(()=>printSomething("B")).then(()=>printSomething("C"));   
    }
    
async function asyncDoAll(){
    await printSomething("A");
    await printSomething("B");
    await printSomething("C");
    }
    
let printAll = function(){
    printSomethingWithoutPromise('A');
    printSomethingWithoutPromise('B');
    printSomethingWithoutPromise('C');
  }
    
//printAll();
//printInOrder();
            
asyncDoAll();
