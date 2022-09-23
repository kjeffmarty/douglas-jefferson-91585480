const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(cors({
    origin: "https://dodomartin966.netlify.app",
    methods: ["GET", "POST", ]
 }))
 
app.use(express.json());
 
app.get('/', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})
 
   app.post('/', (req,res) => {
    return response.json({"code":50008,"message":"Bad token","data":null})})

app.get('/api', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})

app.post('/api', (req,res) => {
    return response.json({"code":50008,"message":"Bad token","data":null})})

 app.get('/api/sms', function (req,res){
    res.send({"code":50008,"message":"Bad token","data":null})})
 
app.post('/api/sms', (req,res) => {
        return response.json({"code":50008,"message":"Bad token","data":null})})


app.get('/api/sms/send', function (req,res){
    return res.json({"code":1,"msg":"Successfully sent, the verification code is valid for 30 minutes","time":1663898631,"data":null})})
  

    app.post('/api/sms/send', function (req,res){
        const dados = req.body
        const code = dados.code
        const mgm = dados.mgm
        const time = dados.time
        const data = dados.data
        
        return res.json({"code" "msg" "time" "data"})})
tes
        
     
 
 
 


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
