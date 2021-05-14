const express = require('express')
const path = require('path')   

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))    // To access all the middlewares from public folder(front end)
app.use('/api',require('./routes/api').route)   //To access the api data (backend work)

app.listen(3457,()=> console.log("Server Started at http://localhost:3457"))  // making local server