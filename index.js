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
 




app.get('/api/:user/:getBank', (req,res) => {

   let data = {
       "query": {
         "user":req.param.user,
          "getBank":req.param.getBank,
        }
      }
       res.json({"code":1,"msg":"OK","time":1663550822,"data":{"id":9662,"uid":120297,"name":"","cardnum":"","bankname":"","address":"","site":"","tel":"sdsd","passport":"","pay_code":"","addtime":1663480858,"qq":null,"type":1,"account_no":"sdsd","accountNo":"","email":"","bank_type":"PHONE","bankType":"PHONE"}})
   }) 





app.get('/api', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })
 
 

app.get('/api/auth', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })

app.post('/api/auth/registered', (req,res) => {
    res.send({"code":1,"msg":"OK","time":1663618698,"data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJhdWQiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJpYXQiOjE2NjM2MTg2OTgsIm5iZiI6MTY2MzYxODY5OCwiZXhwIjoxNjY4ODAyNjk4LCJqdGkiOnsiaWQiOjEyNTA5OCwidHlwZSI6Ikg1In19.rxi3mmNu4TDR2sIX5iilW7gU74isYQzy_86iisX7VsM","userId":"125098"}})
 })





app.post('/api/auth/emailVerify', (req,res) => {
    res.json({"code":1,"msg":"OK","time":1663618050,"data":{"ip":"45.166.191.237","msg":"297209","addtime":1663618050,"type":"1","tel":"ederfrferferfr2@gmail.com"}})
 })

app.get('/api/team', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })



app.post('/api/auth/login', (req,res) => {
    res.json({"code":1,"msg":"OK","time":1663461589,"data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJhdWQiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJpYXQiOjE2NjM0NjE1ODksIm5iZiI6MTY2MzQ2MTU4OSwiZXhwIjoxNjY4NjQ1NTg5LCJqdGkiOnsiaWQiOjEyMDI5NywidHlwZSI6Ikg1In19.0cW6VS_bTaCfyjBPUicVsM5YwslzH7Awt_8HvXZx7EY","userId":120297,"otc_member_level":0}})
 })

 app.get('/api/home', (req,res) => { 
   res.send({"code":50008,"message":"Bad token","data":null})
})




 app.get('/api/user', (req,res) => { 
    res.send({"code":50008,"message":"Bad token","data":null})
 })

 
app.get('/api/user/withdrawal', (req,res) => { 
    res.json({"code":0,"msg":"Please set a payment password","time":1663550246,"data":null})
 })



app.get('/api/user/getTopupAdds3', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663481494,"data":[{"name":"onepay","name2":"onepay","ico":"\/public\/img\/onepay-icon.png","exchange_rate":1,"address":""},{"name":"USDT-TRC20","name2":"USDT-TRC20","ico":"\/public\/img\/usdt-icon.png","exchange_rate":5,"address":"TVb38sF2EPE2PwSxPCa4j7px27KF5Qmm1C"},{"name":"USDT-ERC20","name2":"USDT-ERC20","ico":"\/public\/img\/usdt-icon.png","exchange_rate":5,"address":"0x568513d1c6Eb485b385706616CC77a5e7505fbc5"},{"name":"BTC","name2":"BTC","ico":"\/public\/img\/btc-icon.png","exchange_rate":175000,"address":"3PxGdee7tf7hdnd5e4zKnbYmKBvvbSSQii"},{"name":"ETH","name2":"ETH","ico":"\/public\/img\/eth-icon.png","exchange_rate":12500,"address":"0x568513d1c6Eb485b385706616CC77a5e7505fbc5"}]})
 })


app.post('/api/user/channelRecharge', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663612394,"data":{"trade_url":null}})
 })




 app.post('/api/user/withdrawalFreeMonth', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663549747,"data":{"withdrawal_free_month":2,"withdrawal_count":0}})
 })



app.post('/api/user/addBank', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663480858,"data":null})
 })


app.get('/api/robot', (req,res) => { 
    res.send({"code":50008,"message":"Bad token","data":null})
 })


app.get('/api/robot/robotList', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663468332,"data":{"list":[{"id":1,"name":"3 Days","day":3,"bili":"0.022","min_num":"100","max_num":"999999","shouxu":"0","name_en":"3 Days"},{"id":2,"name":"30 Days","day":30,"bili":"0.028","min_num":"999999","max_num":"999999","shouxu":"0","name_en":"30 Days"},{"id":3,"name":"60 Days","day":60,"bili":"0.032","min_num":"999999","max_num":"999999","shouxu":"0","name_en":"60 Days"},{"id":4,"name":"90 Days","day":90,"bili":"0.045","min_num":"999999","max_num":"999999","shouxu":"0","name_en":"90 Days"},{"id":5,"name":"120 Days","day":120,"bili":"0.06","min_num":"999999","max_num":"999999","shouxu":"0","name_en":"120 Days"},{"id":6,"name":"180 Days","day":180,"bili":"0.08","min_num":"999999","max_num":"999999","shouxu":"0","name_en":"180 Days"}],"balance":"0.0000"}})
 })



app.get('/api/info', (req,res) => { 
    res.send({"code":50008,"message":"Bad token","data":null})
 })

app.get('/api/info/withDraw', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663549747,"data":{"detail":"<p>The withdrawal time is from Monday to Friday every week. You have two&nbsp;free withdrawal opportunities every month, and the fee for each withdrawal is 10% starting from the third&nbsp;time.<\/p>\r\n\r\n<p>USDT withdrawal minimum $100.<\/p>"}})
 })




app.get('/api/info/getFaq', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663469340,"data":[{"detail":"<ol>\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to register as a member?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">The system adopts the invitation system to register new members. In order to ensure the income of registered members and prevent excessive registration from reducing income, new members can only register at the invitation of existing members.<\/span><\/span><\/p>\r\n\r\n<ol start=\"2\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to deposit and what payment methods?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">The system is open to many countries, we provide international payment methods: usdt (trc20). We also support our own currencies for different countries.<\/span><\/span><\/p>\r\n\r\n<ol start=\"3\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How can I invest and earn income?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">You can buy an robot in the system, and you can get stable automatic swipe income and interest every day. All the income can be withdrawn to your bank card.<\/span><\/span><\/p>\r\n\r\n<ol start=\"4\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">Is there a limit on the purchase amount?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">Yes, in order to let more members have the opportunity to obtain income, each account of the system has a maximum purchase amount.<\/span><\/span><\/p>\r\n\r\n<ol start=\"5\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to deal with the problems in the operation?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">You can contact online customer service at any time to help complete all operations.<\/span><\/span><\/p>\r\n\r\n<p style=\"text-align:justify\">&nbsp;<\/p>","title":"Common Questions"}]})
 })





app.get('/api/user/profile', (req,res) => { 
   res.json({
    "code": 1,
    "msg": "OK",
    "time": 1663660307,
    "data": {
        "username": "Douglas",
        "invite_code": "120297",
        "headpic": "\/static_new6\/headimg\/151.png",
        "balance": "10.000",
        "freeze_balance": "0.000",
        "tel": "douglasjefferson9636@gmail.com",
        "today_unsettled": "0.0000",
        "today_settled": "0.00",
        "deal_count": 0,
        "id": 120297,
        "id_status": 0,
        "real_name": "",
        "id_card_num": "",
        "txphone": "",
        "disable_model": [],
        "task": "30",
        "phone": null,
        "bankInfo": {
            "id": 9662,
            "uid": 120297,
            "name": "",
            "cardnum": "",
            "bankname": "",
            "address": "",
            "site": "",
            "tel": "sdsd",
            "passport": "",
            "pay_code": "",
            "addtime": 1663480858,
            "qq": null,
            "type": 1,
            "account_no": "sdsd",
            "accountNo": "",
            "email": "",
            "bank_type": "PHONE",
            "bankType": "PHONE"
        },
        "share_url": "https:\/\/dodomartin966.netlify.app\/#\/login\/register?code=120297",
        "otc_member_level": 0
    }
})
})





app.post('/api/user/updateUser', (req,res) => { 
   res.json({"code":1,"msg":"OK","time":1663622655,"data":{"robot_profit":0,"team_profit":0,"order_profit":0,"robot_balance":"0.0000","manual":0,"auto":0,"total":0}})
})






    
  app.get('/api/user/userCount', (req,res) => { 
   res.json({"code":1,"msg":"OK","time":1663452598,"data":{"robot_profit":0,"team_profit":0,"order_profit":0,"robot_balance":"0.0000","manual":0,"auto":0,"total":0}})
})




app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
