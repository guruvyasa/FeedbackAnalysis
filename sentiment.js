let request = require('request');
exports.getSentiment = function(user_text){
    let url = 'https://apis.paralleldots.com/v3/emotion';

    let formData = {
        api_key:'API_KEY',
        text:user_text,
        lang_code:'en'
    }

    return new Promise((resolve,reject)=>{
        request.post({url,formData:formData},(err,response,body)=>{
            resolve(JSON.parse(body));
            // console.log(body.emotion);
        });
    
    });
    
}
