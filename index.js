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
 



app.get('/api/sms', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})
 




app.post('/api/sms/send', (req,res) => {
    res.send({"code":1,"msg":"Successfully sent, the verification code is valid for 30 minutes","time":1663880922,"data":null})
 })
 
 


 

 


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
