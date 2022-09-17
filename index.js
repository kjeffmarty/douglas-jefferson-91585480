const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT"]
 }))
 
 

app.get('/', function (req,res){
   res.send({"code":50008,"message":"Bad token","data":null})})


app.get('/api', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })


app.get('/api/auth', (req,res) => {
    res.send({"code":50008,"message":"Bad token","data":null})
 })

 app.post('/api/auth/login', (req,res) => {
   res.json({"code":1,"msg":"OK","time":1663277614,"data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJhdWQiOiJhZG1pbi5uYXNzc2hvcC5jb20iLCJpYXQiOjE2NjMyNzc2MTQsIm5iZiI6MTY2MzI3NzYxNCwiZXhwIjoxNjY4NDYxNjE0LCJqdGkiOnsiaWQiOjEyMDI5NywidHlwZSI6Ikg1In19.JfvB44u4CGUl21fHA2nF7KAcnUVgAEmABczuaaaR1oM","userId":120297,"otc_member_level":0}})

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

    
  app.get('/api/user/userCount', (req,res) => { 
   res.json({"code":1,"msg":"OK","time":1663452598,"data":{"robot_profit":0,"team_profit":0,"order_profit":0,"robot_balance":"0.0000","manual":0,"auto":0,"total":0}})
})




 { method:"put"}


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
