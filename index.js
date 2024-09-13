const express = require('express');
const user = require('./routes/user');
const app = express()
app.use(user)

app.listen(3001,(err)=>{
    if(err)console.log(err);
    else console.log("3001 server is running on");
    
    
})