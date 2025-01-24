const express = require('express');

const app = express();

app.get('/',(req,res)=>{
     res.send('this is the Home page')
})
app.get('/about',(req,res)=>{
     res.send('this is the About page')
})
app.get('/profile',(req,res)=>{
     res.send('this is the Profile page')
})
app.get('*',(req,res)=>{
     res.send('Page not found')
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})