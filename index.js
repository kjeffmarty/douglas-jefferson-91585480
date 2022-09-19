const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000;


app.use(cors({
    origin: "https://dodomartin966.netlify.app",
    methods: ["GET", "POST", "PUT"]
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
       res.json({"code":1,"msg":"OK","time":1663582861,"data":{"id":120297,"uid":120297,"name":"","cardnum":"","bankname":"","address":"","site":"","tel":"sdsd","passport":"","pay_code":"","addtime":1663480858,"qq":null,"type":1,"account_no":"sdsd","accountNo":"","email":"","bank_type":"PHONE","bankType":"PHONE"}})
   }) 





app.get('/api', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })
 
 

app.get('/api/auth', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })


app.get('/api/team', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })


app.get('/api/team/getDetails?level=1&limit=20&page=1', (req,res) => {
    res.json({"code":1,"msg":"OK","time":1663469836,"data":[{"id":124604,"username":"MDZ_txg4sr","addtime":"2022-09-17 08:19:11","balance":"10.000"},{"id":120725,"username":"douglas","addtime":"2022-09-04 08:18:06","balance":"10.000"},{"id":120481,"username":"Jeffdodo","addtime":"2022-09-03 08:12:39","balance":"10.000"}]})
 })

app.post('/api/auth/login', (req,res) => {
    res.json({"code":1,"msg":"OK","time":1663461589,"data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJhdWQiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJpYXQiOjE2NjM0NjE1ODksIm5iZiI6MTY2MzQ2MTU4OSwiZXhwIjoxNjY4NjQ1NTg5LCJqdGkiOnsiaWQiOjEyMDI5NywidHlwZSI6Ikg1In19.0cW6VS_bTaCfyjBPUicVsM5YwslzH7Awt_8HvXZx7EY","userId":120297,"otc_member_level":0}})
 })

 app.get('/api/home', (req,res) => { 
   res.send({"code":50008,"message":"Bad token","data":null})
})

app.get('/api/home/getShowContent', (req,res) => { 
   res.json({"code":1,"msg":"OK","time":1663046900,"data":{"popup":"","top_banner":[{"image":"https:\/\/douglas-jefferson-91585480.herokuapp.com\/upload\/2e1f6872a9d28813\/06113e22e2434972.png","title":"购物","url":""},{"image":"https:\/\/admin.nassshop.com\/upload\/d61094a8e31d40cd\/d2b091aa2ec41b01.png","title":"公司","url":""}],"bulletin":"O saque e dep&oacute;sito da plataforma est&aacute; aberto das 10:00h &agrave;s 22:00h.\r\nA retirada &eacute; no modo T+1, normalmente chegar&aacute; em at&eacute; 48 horas, e a retirada do final de semana chegar&aacute; na segunda-feira","cate":[{"id":1,"name":"Dafiti","bili":"2","cate_pic":"https:\/\/www.nassshop.com\/goods\/1.png","recharge":"10.00","deal_count":30,"open":1},{"id":2,"name":"Submarino","bili":"2.3","cate_pic":"https:\/\/www.nassshop.com\/goods\/2.jpg","recharge":"500.00","deal_count":30,"open":0},{"id":3,"name":"Amazonas","bili":"2.8","cate_pic":"https:\/\/www.nassshop.com\/goods\/3.png","recharge":"2000.00","deal_count":30,"open":0},{"id":4,"name":"OLX","bili":"3.3","cate_pic":"https:\/\/www.nassshop.com\/goods\/4.png","recharge":"5000.00","deal_count":30,"open":0},{"id":6,"name":"Americanas","bili":"4","cate_pic":"https:\/\/www.nassshop.com\/goods\/5.jpg","recharge":"10000.00","deal_count":30,"open":0},{"id":7,"name":"Mercado Libre","bili":"5","cate_pic":"https:\/\/www.nassshop.com\/goods\/6.jpg","recharge":"20000.00","deal_count":30,"open":0}],"goods":[{"id":34652,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Sabão líquido Omo Puro Cuidado sachê 900 ml","goods_name_en":"Omo Puro Liquid Soap Care sachet 900 ml","goods_name_cn":"Sabão líquido Omo Puro Cuidado sachê 900 ml","goods_info":"<h1>Sab&atilde;o l&iacute;quido Omo Puro Cuidado sach&ecirc; 900 ml<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"13.690","goods_pic":"https:\/\/admin.nassshop.com\/upload\/772066029a44f485\/23963fd4e39f72a8.jpg","addtime":1651840918,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Sabão líquido Omo Puro Cuidado sachê 900 ml"},{"id":34657,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Sabão líquido Omo Lavagem Perfeita galão 3 L","goods_name_en":"Omo Perfect Wash Liquid Soap 3 L gallon","goods_name_cn":"Sabão líquido Omo Lavagem Perfeita galão 3 L","goods_info":"<h1>Sab&atilde;o l&iacute;quido Omo Lavagem Perfeita gal&atilde;o 3 L<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"42.570","goods_pic":"https:\/\/admin.nassshop.com\/upload\/77310992c74fd3f0\/d210704d4817221a.jpg","addtime":1651841400,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Sabão líquido Omo Lavagem Perfeita galão 3 L"},{"id":34667,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Kit Shampoo E Condicionador Cabelos Ondulados 315ml","goods_name_en":"Kit Shampoo E Condicionador Cabelos Ondulados 315ml","goods_name_cn":"Kit Shampoo E Condicionador Cabelos Ondulados 315ml","goods_info":"<h1>Kit Shampoo E Condicionador Cabelos Ondulados 315ml<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"53.900","goods_pic":"https:\/\/admin.nassshop.com\/upload\/4649fae9ffd5bf4d\/ea8e6ce815f6841a.jpg","addtime":1651841461,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Kit Shampoo E Condicionador Cabelos Ondulados 315ml"},{"id":34669,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Sabão em pó Brilhante Limpeza Total Pro Roupas Brancas e Coloridas pacote 5.6 kg","goods_name_en":"Brilliant Soap Powder Total Cleaning Pro White and Colored Clothes package 5.6 kg","goods_name_cn":"Sabão em pó Brilhante Limpeza Total Pro Roupas Brancas e Coloridas pacote 5.6 kg","goods_info":"<h1>Sab&atilde;o em p&oacute; Brilhante Limpeza Total Pro Roupas Brancas e Coloridas pacote 5.6 kg<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"59.900","goods_pic":"https:\/\/admin.nassshop.com\/upload\/4fcbe4e2f7ecc56c\/838e27f75af69280.jpg","addtime":1651841514,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Sabão em pó Brilhante Limpeza Total Pro Roupas Brancas e Coloridas pacote 5.6 kg"},{"id":34673,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Caspacil Anticaspa Xampu 100ml","goods_name_en":"Caspacil Anticaspa Xampu 100ml","goods_name_cn":"Caspacil Anticaspa Xampu 100ml","goods_info":"<h1>Caspacil Anticaspa Xampu 100ml<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"42.000","goods_pic":"https:\/\/admin.nassshop.com\/upload\/7c8492b08d16c773\/af81a064cbfc279e.png","addtime":1651841616,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Caspacil Anticaspa Xampu 100ml"},{"id":34675,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Sabão em pó Ypê Power Act pacote 2.4 kg","goods_name_en":"Ypê Power Act Soap Powder 2.4 kg pack","goods_name_cn":"Sabão em pó Ypê Power Act pacote 2.4 kg","goods_info":"<h1>Sab&atilde;o em p&oacute; Yp&ecirc; Power Act pacote 2.4 kg<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"34.490","goods_pic":"https:\/\/admin.nassshop.com\/upload\/8cce87ef0bcb92da\/ed91c258a358c9dc.jpg","addtime":1651841890,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Sabão em pó Ypê Power Act pacote 2.4 kg"},{"id":34676,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Shampoo Xampu Couro Detox Antioleosidade 200ml Vegana Wnf","goods_name_en":"Shampoo Xampu Couro Detox Antioleosidade 200ml Vegana Wnf","goods_name_cn":"Shampoo Xampu Couro Detox Antioleosidade 200ml Vegana Wnf","goods_info":"<h1>Shampoo Xampu Couro Detox Antioleosidade 200ml Vegana Wnf<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"45.600","goods_pic":"https:\/\/admin.nassshop.com\/upload\/3c91f811441560b5\/9e9f67eee004baa9.png","addtime":1651841967,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Shampoo Xampu Couro Detox Antioleosidade 200ml Vegana Wnf"},{"id":34678,"cid":"Dafiti","shop_name":"","shop_name_en":"","shop_name_cn":"","goods_name":"Limpador Tira Limo X-14 Veja 30% Desconto 500ml","goods_name_en":"Cleaner Strip Limo X-14 See 30% Discount 500ml","goods_name_cn":"Limpador Tira Limo X-14 Veja 30% Desconto 500ml","goods_info":"<h1>Limpador Tira Limo X-14 Veja 30% Desconto 500ml<\/h1>","goods_info_en":"","goods_info_cn":"","goods_price":"14.490","goods_pic":"https:\/\/admin.nassshop.com\/upload\/35af251fd34962ac\/077e6d068684e362.jpg","addtime":1651842048,"status":1,"balance":"0.000","shop_status":0,"goods_name_po":"Limpador Tira Limo X-14 Veja 30% Desconto 500ml"}]}})
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
    res.send({"code":1,"msg":"OK","time":1663469340,"data":[{"detail":"<ol>\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to register as a member?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">The system adopts the invitation system to register new members. In order to ensure the income of registered members and prevent excessive registration from reducing income, new members can only register at the invitation of existing members.<\/span><\/span><\/p>\r\n\r\n<ol start=\"2\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to deposit and what payment methods?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">The system is open to many countries, we provide international payment methods: usdt (trc20). We also support our own currencies for different countries.<\/span><\/span><\/p>\r\n\r\n<ol start=\"3\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How can I invest and earn income?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">You can buy an robot in the system, and you can get stable automatic swipe income and interest every day. All the income can be withdrawn to your bank card.<\/span><\/span><\/p>\r\n\r\n<ol start=\"4\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">Is there a limit on the purchase amount?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">Yes, in order to let more members have the opportunity to obtain income, each account of the system has a maximum purchase amount.<\/span><\/span><\/p>\r\n\r\n<ol start=\"5\">\r\n\t<li><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">How to deal with the problems in the operation?<\/span><\/span><\/li>\r\n<\/ol>\r\n\r\n<p style=\"margin-left:28px\"><span style=\"font-size:11px;\"><span style=\"font-family:Arial,Helvetica,sans-serif;\">You can contact online customer service at any time to help complete all operations.<\/span><\/span><\/p>\r\n\r\n<p style=\"text-align:justify\">&nbsp;<\/p>","title":"Common Questions"}]})
 })


app.get('/api/info/getCustomer', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663469340,"data":[{"id":1,"username":"贵宾服务","url":"https:\/\/wa.me\/5511954764468"},{"id":2,"username":"在线服务","url":"https:\/\/t.me\/NassShop888"}]})
 })


app.get('/api/user/profile', (req,res) => { 
    res.json({"code":1,"msg":"OK","time":1663467902,"data":{"username":"Douglas","invite_code":"120297","headpic":"\/static_new6\/headimg\/151.png","balance":"9000.000","freeze_balance":"0.000","tel":"douglasjefferson9636@gmail.com","today_unsettled":"0.0000","today_settled":"0.00","deal_count":0,"id":120297,"id_status":0,"real_name":"","id_card_num":"","txphone":"","disable_model":[],"task":"30","phone":null,"bankInfo":null,"share_url":"https:\/\/www.nassshop.com\/#\/login\/register?code=120297","otc_member_level":0}})
 })


    
  app.get('/api/user/userCount', (req,res) => { 
   res.json({"code":1,"msg":"OK","time":1663452598,"data":{"robot_profit":0,"team_profit":0,"order_profit":0,"robot_balance":"0.0000","manual":0,"auto":0,"total":0}})
})




app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
