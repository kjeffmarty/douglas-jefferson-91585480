const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000;





app.use(cors({
    origin: "https://dodomartin966.netlify.app",
    methods: ["GET", "POST", "PATCH","PUT", "DELETE"]
 }))
 
app.get('/', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})
 




app.get('/api', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })
 
 


 

 


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
