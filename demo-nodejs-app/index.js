console.log('Reading your env vars...'); 
const dotenv=require('dotenv'); 
//dotenv.config({ path: '/home/dell/personal/consul-template-demo/shishir/app/env-dir/demo/.env' });
dotenv.config();
console.log('...done reading your env vars.');
console.log('Starting the application');

const express=require("express");
const app=express();

app.get('/',(req,res)=>{
  res.send(`This application is running on port ${process.env.PORT}. Hello ${process.env.NAME}! How is the weather at ${process.env.CITY}?`);
});


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${process.env.PORT}`);
    }
  }
)
