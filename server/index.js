const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const {mongoUrl} = require('./keys')


require('./models/User');

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(authRoutes)

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
    
})



app.get('/',requireToken,(req,res)=>{
    res.send({email:req.user.email})
})

app.listen(PORT,()=>{
    console.log("server running "+PORT)
})