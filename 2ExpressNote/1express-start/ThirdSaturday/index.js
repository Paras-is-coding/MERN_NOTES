//using express to create routs and server

const express = require('express')
const app = express()

//middleware -> runs before route executes
app.use((req,res,next)=>{
    console.log("Hello from middleware");
    next();
})

app.get('/', function (req, res) {
  res.send('Hello Paras im using nodemon haha!')
})
app.get('/about', function (req, res) {
  res.send("I'm about page haha")
})

app.listen(3000)