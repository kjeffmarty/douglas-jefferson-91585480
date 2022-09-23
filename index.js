const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000;





app.use(cors({
    origin: "https://dodomartin966.netlify.app",
    methods: ["GET", "POST", "PATCH","PUT", "DELETE"]
 }))
 

const projects = [];
 
app.get('/', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})
 


app.get('/api', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})



 app.get('/api/sms', function (req,res){
    res.send({"code":50008,"message":"Bad token","data":null})})
 
 

 app.get('/api/sms/send', function (req,res){
    res.send({"code":50008,"message":"Bad token","data":null})})
  


app.post('/api/sms/send', (req,res) => {
    const { code, msg, time, data } = request.body;

    const send = {
        code,
        msg,
        time,
        data,
    }

    projects.push(send);
    return response.status(201).json(send);
     
 });
 


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
