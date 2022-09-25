const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))



const users = [
    { name: 'alison', age: 22 },
    ];

const port = process.env.PORT || 3000;

app.use(express.json())

app.use(cors({
    origin: "https://dodomartin966.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE" ]
 }))
 
 
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


 app.get('/api/user', function (req,res){
    res.send({"code":50008,"message":"Bad token","data":null})})

 app.post('/api/user/getRechargeW', function (req,res){
    res.json({"code":1,"msg":"","time":1664048954,"data":{"recharge_award":"0","unfreeze_recharge_award":"100"}})})


 app.get('/api/user/index', function (req,res){
    res.json({"code":1,"msg":"","time":1664048954,"data":{"userinfo":{"id":53652,"username":"douglas","nickname":"douglas","mobile":"5561998770447","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png","level":1,"bio":"","money":"0.0000","recom_money":"0.0000","valid_money":"0.0000","freeze_money":0,"topup_money":"0.0000","cash_money":"0.0000","score":0,"recomno":"8689541","user_pid":51960,"recom_nums":0,"realauth":0,"status":"normal","agent_id":5,"recharge_gold":"0.00","is_recharge":0,"recharge_gold_case_time":0,"is_give_recharge":0,"issue_u":0,"trc_address":"TThhtTDHpFeNQBXH8wEMdDiBCotW8MPH9g","token":"dc1b8330-c8d0-41e8-b871-58abb3256b37","user_id":53652,"createtime":1664042903,"expiretime":1666634903,"expires_in":2585949,"less_amount":"500.00","vip_img":"https:\/\/www.theodorec.com\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png"}}})})




 app.post('/api/user/index', function (req,res){
   return res.json({"code":1,"msg":"","time":1664048954,"data":{"userinfo":{"id":53652,"username":"douglas","nickname":"douglas","mobile":"5561998770447","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png","level":1,"bio":"","money":"0.0000","recom_money":"0.0000","valid_money":"0.0000","freeze_money":0,"topup_money":"0.0000","cash_money":"0.0000","score":0,"recomno":"8689541","user_pid":51960,"recom_nums":0,"realauth":0,"status":"normal","agent_id":5,"recharge_gold":"0.00","is_recharge":0,"recharge_gold_case_time":0,"is_give_recharge":0,"issue_u":0,"trc_address":"TThhtTDHpFeNQBXH8wEMdDiBCotW8MPH9g","token":"dc1b8330-c8d0-41e8-b871-58abb3256b37","user_id":53652,"createtime":1664042903,"expiretime":1666634903,"expires_in":2585949,"less_amount":"500.00","vip_img":"https:\/\/www.theodorec.com\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png"}}})})


 app.get('/api/user/login', function (req,res){
    res.json({"code":1,"msg":"Login successful","time":1664010265,"data":{"userinfo":{"id":53652,"username":"douglas","nickname":"douglas","mobile":"5561998770447","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png","level":1,"bio":"","money":"0.0000","recom_money":"0.0000","valid_money":"0.0000","freeze_money":"0.0000","topup_money":"0.0000","cash_money":"0.0000","score":0,"recomno":"8689541","user_pid":51960,"recom_nums":0,"realauth":0,"status":"normal","agent_id":5,"recharge_gold":"0.00","is_recharge":0,"recharge_gold_case_time":0,"is_give_recharge":0,"issue_u":0,"trc_address":"TThhtTDHpFeNQBXH8wEMdDiBCotW8MPH9g","token":"a4e69765-b987-441a-8504-20ea0f9fc6d1","user_id":53652,"createtime":1664010265,"expiretime":1666602265,"expires_in":2592000}}})})


 app.post('/api/user/login', function (req,res){
     const dados = req.body
   return res.json({"code":1,"msg":"Login successful","time":1664010265,"data":{"userinfo":{"id":53652,"username":"douglas","nickname":"douglas","mobile":"5561998770447","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png","level":1,"bio":"","money":"0.0000","recom_money":"0.0000","valid_money":"0.0000","freeze_money":"0.0000","topup_money":"0.0000","cash_money":"0.0000","score":0,"recomno":"8689541","user_pid":51960,"recom_nums":0,"realauth":0,"status":"normal","agent_id":5,"recharge_gold":"0.00","is_recharge":0,"recharge_gold_case_time":0,"is_give_recharge":0,"issue_u":0,"trc_address":"TThhtTDHpFeNQBXH8wEMdDiBCotW8MPH9g","token":"a4e69765-b987-441a-8504-20ea0f9fc6d1","user_id":53652,"createtime":1664010265,"expiretime":1666602265,"expires_in":2592000}}})})






 app.get('/api/', function (req,res){
    res.send({"code":50008,"message":"Bad token","data":null})})




 app.post('/api/user/register', function (req,res){
  return res.json({"code":0,"msg":"Unknown parameter","time":1664009373,"data":null})})




 
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
        return res.json({"code":1,"msg":"Successfully sent, the verification code is valid for 30 minutes","time":1663997227,"data":null})})
       

 app.get('/api/product', function (req,res){
    res.send({"code":1,"msg":"Successfully sent, the verification code is valid for 30 minutes","time":1663898631,"data":null})})       
 


app.get('/api/product/index', function (req,res){
   return res.json({"code":1,"msg":"","time":1663982877,"data":[{"id":9347,"title":"TCGAMES Card Binder for Cards Binder 4-Pocket, 440 PocketsTrading Card Games Collection Binder with Sleeves (Pink)","image":"https:\/\/m.media-amazon.com\/images\/I\/71NroZ+ixgL._AC_UL320_.jpg","price":"16.99","level":1,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":0,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.1","earn_rate":"0.25","platform":"Amazon"},{"id":2555,"title":"MagicSuit Womens Swimwear Parker Tummy Control Underwire Bra Swimdress with Adjustable Straps","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I41KCNYGynuL._MCnd_AC_UL320_.jpg","price":"178.00","level":1,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.1","earn_rate":"0.25","platform":"ebay"},{"id":1821,"title":"The North Face Women’s Shelbe Raschel Parka Length With Hood","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I714kxLB8TuL._AC_UL320_.jpg","price":"115.53","level":2,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.2","earn_rate":"0.26","platform":"Amazon"},{"id":9404,"title":"Wii Remote Controller (2 Pack) with Motion Plus Compatible with Wii and Wii U Console Wii Remote Controller with Shock Function (Black+Dark Blue)","image":"https:\/\/m.media-amazon.com\/images\/I\/61MAUA70LPL._AC_UL320_.jpg","price":"29.99","level":2,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":0,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.2","earn_rate":"0.26","platform":"Shopee"},{"id":9689,"title":"Youth Cartoon Game Boy T-Shirt and Shorts Set, Summer Sports Short Sleeve Shorts Suits for Kids","image":"https:\/\/m.media-amazon.com\/images\/I\/812ZafLuFsL._AC_UL320_.jpg","price":"25.99","level":3,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":0,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.3","earn_rate":"0.27","platform":"Amazon"},{"id":2750,"title":"Levis Womens Premium Ex-boyfriend Sherpa Jacket","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/IA1uakKLzdLL._AC_UL320_.jpg","price":"128.00","level":3,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.3","earn_rate":"0.27","platform":"Shopee"},{"id":9351,"title":"88-Pcs SSBU Series Cards Box for Super Smash Bros Amiibo. fits Switch Games SSB Ultimate","image":"https:\/\/m.media-amazon.com\/images\/I\/61VUUMPZN4L._AC_UL320_.jpg","price":"47.99","level":4,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":0,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.4","earn_rate":"0.28","platform":"ebay"},{"id":1771,"title":"BathGown Sexy Illusion Long Lingerie Tulle Robe Nightgown Bathrobe Sleepwear Bridal Robe Wedding Scarf","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I51gntmgrn1S._AC_UL320_.jpg","price":"129.99","level":4,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.4","earn_rate":"0.28","platform":"Timll"},{"id":4328,"title":"Columbia Womens W Sweater Weather Hooded Pullover","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I71SZFNNHHvS._AC_UL320_.jpg","price":"112.39","level":5,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.5","earn_rate":"0.29","platform":"Wish"},{"id":2032,"title":"S.L. Fashions Womens Embellished Tiered Jacket Dress (Petite and Regular)","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I61TS5f4BT6L._MCnd_AC_UL320_.jpg","price":"125.00","level":5,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.5","earn_rate":"0.29","platform":"Amazon"},{"id":11306,"title":"The Childrens Place Boys Toddler Uniform Belt","image":"https:\/\/m.media-amazon.com\/images\/I\/51Ugx0lxo8L._AC_UL320_.jpg","price":"392.00","level":6,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":0,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.6","earn_rate":"0.30","platform":"Amazon"},{"id":1358,"title":"GWHOLE Ring Size Adjuster with Silver Polishing Cloth,Set of 4 (2mm\/3mm)","image":"https:\/\/www.theodorec.com\/uploads\/img\/product\/I61GCDGT0D-L._AC_UL320_.jpg","price":"6.19","level":6,"sale_nums":0,"description":null,"sort":0,"status":1,"groupon_nums":5,"groupon_times":0,"create_time":null,"limit":0,"activity_id":0,"start_date":null,"end_date":null,"day_earn":"0.00","month_earn":"0.00","total_earn":"0.00","days":0,"level_text":"VIP LV.6","earn_rate":"0.30","platform":"Timll"}]})})


  app.post('/api/product/index', (req,res) => {
         const user = req.body;
         users.push(user);
       res.status(201).send('created user');
    })
      



 
app.get('/api/index', function (req,res){
    res.send({"code":1,"msg":"Successfully sent, the verification code is valid for 30 minutes","time":1663898631,"data":null})})
 

 
app.post('/api/index/services', function (req,res){
        const dados = req.body
        const code = dados.code
        const mgm = dados.mgm
        const time = dados.time
        const data = dados.data
        
        
   return res.json({"code":1,"msg":"","time":1663992384,"data":[{"id":7,"kind":"Telegram","nickname":"Theodorec","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/ed048b5ace5969004973e9ca33911c16.jpg","linkurl":"https:\/\/t.me\/Theodorec01","online":1,"sort":99,"status":1}]})})
 
 




 app.get('/api/index/index_advs', function (req,res){
    return res.json({"code":1,"msg":"","time":1663982877,"data":{"banner":[{"id":33,"kind":"index_top","title":"5","image":"https:\/\/www.theodorec.com\/upload\/20220911\/b6d1528a9391543383710114dea657d6.jpg","url":"#","params":"","ftype":"image"},{"id":32,"kind":"index_top","title":"4","image":"https:\/\/www.theodorec.com\/upload\/20220911\/166e9a2ff6a03ac56bad8e394711915e.jpg","url":"#","params":"","ftype":"image"},{"id":31,"kind":"index_top","title":"3","image":"https:\/\/www.theodorec.com\/upload\/20220909\/dcfca52df5ff0252a2d7a00113939a1a.jpg","url":"#","params":"","ftype":"image"},{"id":30,"kind":"index_top","title":"2","image":"https:\/\/www.theodorec.com\/upload\/20220909\/650e79344acf354eae1bf91c3f8267ef.jpg","url":"#","params":"","ftype":"image"},{"id":29,"kind":"index_top","title":"1","image":"https:\/\/www.theodorec.com\/upload\/20220911\/0bc6f98ccbc63920172779006a7a5ab6.jpg","url":"#","params":"","ftype":"image"}],"commission":{"money":"0.0000","total_earn":"0.00","mine_earn":"0.0000","group_earn":"0.00"},"notice":[{"id":120998,"user_id":51708,"order_price":"59.00","order_earn":"0.1470","create_time":"2022-09-23 21:24:56","nickname":"Sulobaba****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120997,"user_id":54033,"order_price":"13.96","order_earn":"0.0340","create_time":"2022-09-23 21:24:56","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120996,"user_id":54033,"order_price":"14.78","order_earn":"0.0360","create_time":"2022-09-23 21:24:22","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120995,"user_id":51708,"order_price":"74.99","order_earn":"0.1870","create_time":"2022-09-23 21:24:17","nickname":"Sulobaba****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120994,"user_id":54033,"order_price":"14.29","order_earn":"0.0350","create_time":"2022-09-23 21:23:50","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120993,"user_id":51708,"order_price":"79.99","order_earn":"0.1990","create_time":"2022-09-23 21:23:37","nickname":"Sulobaba****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120992,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:23:20","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120991,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:22:49","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120990,"user_id":51708,"order_price":"76.99","order_earn":"0.1920","create_time":"2022-09-23 21:22:29","nickname":"Sulobaba****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120989,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:22:17","nickname":"Abir1994****","avatar":"https:\/\/www.theodorec.com\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"}],"level_info":{"id":1,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/2cd6650480850e0563c9c3a814c9abb2.png","title":"LV1","min_amount":"10.00","earn_rate":"0.25","order_num":40,"level":1,"upgrade_money":10},"user_level":1,"level_list":[{"id":1,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/2cd6650480850e0563c9c3a814c9abb2.png","title":"LV1","min_amount":"10.00","earn_rate":"0.25","order_num":40,"level":1,"upgrade_money":"10"},{"id":2,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/3565aa2995b634021afae76bdd262713.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/431e1a4bebc9dd5348ed44d8acf811ae.png","title":"LV2","min_amount":"0.00","earn_rate":"0.26","order_num":45,"level":2,"upgrade_money":"500"},{"id":3,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/dce12df45c8d008a93e91e73c0fabcde.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/39f14e9f95eca34358baf2b99b3cf0ae.png","title":"LV3","min_amount":"0.00","earn_rate":"0.27","order_num":50,"level":3,"upgrade_money":"1000"},{"id":4,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/fb63f62cff8220e8759b9c6c3f14a1b1.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/4b1d6724364b4dfa48862f314ba8eb15.png","title":"LV4","min_amount":"0.00","earn_rate":"0.28","order_num":55,"level":4,"upgrade_money":"3000"},{"id":5,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/4520b62396660f50ce6c7e56eb7ebca4.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/52fefc40770848e7a526b5c39560923d.png","title":"LV5","min_amount":"0.00","earn_rate":"0.29","order_num":60,"level":5,"upgrade_money":"5000"},{"id":6,"icon":"https:\/\/www.theodorec.com\/upload\/20220909\/f66b4aa7e356e0238ae9b25188474088.png","image":"https:\/\/www.theodorec.com\/upload\/20220910\/6e4bf52e34a0b6b8f5c7ba721c1f5a2e.png","title":"LV6","min_amount":"10000.00","earn_rate":"0.30","order_num":65,"level":6,"upgrade_money":"10000"}],"gonggao":[{"id":31,"kind":"index_notice","title":"Recruitment invitation","content":"Theodorec is to help big platform stores increase virtual orders, increase popularity and ranking, and get corresponding rewards.\nIt's a great part-time job, you're welcome, it's changed the financial situation of a lot of people, and I'm sure you'll love it.\nYou just need to use your mobile phone and spend a little time every day to complete the tasks provided by the platform, you can immediately return the principal and commission, and can withdraw funds to your account immediately.\nTheodorec platform has an exclusive personal sharing link system, the mall has a permanent commission system, you can invite new friends to join the platform, and then he gets commissions from the operation, you also have a certain profit, the more friends you invite, the income you get more.\nWith such a job, you only need a mobile phone, and you can easily earn a good income for dozens of minutes a day, looking forward to your joining.","lang":"en"},{"id":2,"kind":"index_notice","title":"announcement","content":"With the era of e-commerce, shopping has developed unprecedentedly. Every online seller wants to make their products popular. Theodorec's business philosophy is: &quot;Integrity service, good details, and reassurance for merchants&quot;. The purpose of Theodorec enterprise is: &quot;Unity, Mutual Help, Gratitude, Sharing&quot;.\n\nPlease read Complying with the Platform Rules:\n   1. In order to prevent money laundering, malicious withdrawals, use of multiple accounts to operate and other violations of platform rules, and to avoid infringing on the interests of the platform and merchants, as well as the reputation ranking, member users must abide by the order of operating the platform with one mobile phone and one account. If it is found that the platform rules are violated, the member account will be directly banned.\n   2. Before withdrawing money, please confirm whether the address is correct. If you fill in the wrong address, transfer to the wrong address, etc., you will be responsible for yourself. The arrival time is no more than 24 hours, and the specific arrival time varies with network nodes.","lang":"en"}]}})})



app.post('/api/index/index_advs', function (req,res){
    const dados = req.body
    return res.json({"code":1,"msg":"","time":1663982877,"data":{"banner":[{"id":33,"kind":"index_top","title":"5","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220911\/b6d1528a9391543383710114dea657d6.jpg","url":"#","params":"","ftype":"image"},{"id":32,"kind":"index_top","title":"4","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220911\/166e9a2ff6a03ac56bad8e394711915e.jpg","url":"#","params":"","ftype":"image"},{"id":31,"kind":"index_top","title":"3","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/dcfca52df5ff0252a2d7a00113939a1a.jpg","url":"#","params":"","ftype":"image"},{"id":30,"kind":"index_top","title":"2","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/650e79344acf354eae1bf91c3f8267ef.jpg","url":"#","params":"","ftype":"image"},{"id":29,"kind":"index_top","title":"1","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220911\/0bc6f98ccbc63920172779006a7a5ab6.jpg","url":"#","params":"","ftype":"image"}],"commission":{"money":"0.0000","total_earn":"0.00","mine_earn":"0.0000","group_earn":"0.00"},"notice":[{"id":120998,"user_id":51708,"order_price":"59.00","order_earn":"0.1470","create_time":"2022-09-23 21:24:56","nickname":"Sulobaba****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120997,"user_id":54033,"order_price":"13.96","order_earn":"0.0340","create_time":"2022-09-23 21:24:56","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120996,"user_id":54033,"order_price":"14.78","order_earn":"0.0360","create_time":"2022-09-23 21:24:22","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120995,"user_id":51708,"order_price":"74.99","order_earn":"0.1870","create_time":"2022-09-23 21:24:17","nickname":"Sulobaba****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120994,"user_id":54033,"order_price":"14.29","order_earn":"0.0350","create_time":"2022-09-23 21:23:50","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120993,"user_id":51708,"order_price":"79.99","order_earn":"0.1990","create_time":"2022-09-23 21:23:37","nickname":"Sulobaba****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120992,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:23:20","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120991,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:22:49","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120990,"user_id":51708,"order_price":"76.99","order_earn":"0.1920","create_time":"2022-09-23 21:22:29","nickname":"Sulobaba****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"},{"id":120989,"user_id":54033,"order_price":"12.99","order_earn":"0.0320","create_time":"2022-09-23 21:22:17","nickname":"Abir1994****","avatar":"https:\/\/dodomartin966.netlify.app\/upload\/20220418\/ae6c88330f04eca765d404138e0b2e2f.png"}],"level_info":{"id":1,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/2cd6650480850e0563c9c3a814c9abb2.png","title":"LV1","min_amount":"10.00","earn_rate":"0.25","order_num":40,"level":1,"upgrade_money":10},"user_level":1,"level_list":[{"id":1,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/61ab1e34c0ee7bc57a9713d1fea8dec9.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/2cd6650480850e0563c9c3a814c9abb2.png","title":"LV1","min_amount":"10.00","earn_rate":"0.25","order_num":40,"level":1,"upgrade_money":"10"},{"id":2,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/3565aa2995b634021afae76bdd262713.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/431e1a4bebc9dd5348ed44d8acf811ae.png","title":"LV2","min_amount":"0.00","earn_rate":"0.26","order_num":45,"level":2,"upgrade_money":"500"},{"id":3,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/dce12df45c8d008a93e91e73c0fabcde.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/39f14e9f95eca34358baf2b99b3cf0ae.png","title":"LV3","min_amount":"0.00","earn_rate":"0.27","order_num":50,"level":3,"upgrade_money":"1000"},{"id":4,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/fb63f62cff8220e8759b9c6c3f14a1b1.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/4b1d6724364b4dfa48862f314ba8eb15.png","title":"LV4","min_amount":"0.00","earn_rate":"0.28","order_num":55,"level":4,"upgrade_money":"3000"},{"id":5,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/4520b62396660f50ce6c7e56eb7ebca4.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/52fefc40770848e7a526b5c39560923d.png","title":"LV5","min_amount":"0.00","earn_rate":"0.29","order_num":60,"level":5,"upgrade_money":"5000"},{"id":6,"icon":"https:\/\/dodomartin966.netlify.app\/upload\/20220909\/f66b4aa7e356e0238ae9b25188474088.png","image":"https:\/\/dodomartin966.netlify.app\/upload\/20220910\/6e4bf52e34a0b6b8f5c7ba721c1f5a2e.png","title":"LV6","min_amount":"10000.00","earn_rate":"0.30","order_num":65,"level":6,"upgrade_money":"10000"}],"gonggao":[{"id":31,"kind":"index_notice","title":"Recruitment invitation","content":"Theodorec is to help big platform stores increase virtual orders, increase popularity and ranking, and get corresponding rewards.\nIt's a great part-time job, you're welcome, it's changed the financial situation of a lot of people, and I'm sure you'll love it.\nYou just need to use your mobile phone and spend a little time every day to complete the tasks provided by the platform, you can immediately return the principal and commission, and can withdraw funds to your account immediately.\nTheodorec platform has an exclusive personal sharing link system, the mall has a permanent commission system, you can invite new friends to join the platform, and then he gets commissions from the operation, you also have a certain profit, the more friends you invite, the income you get more.\nWith such a job, you only need a mobile phone, and you can easily earn a good income for dozens of minutes a day, looking forward to your joining.","lang":"en"},{"id":2,"kind":"index_notice","title":"announcement","content":"With the era of e-commerce, shopping has developed unprecedentedly. Every online seller wants to make their products popular. Theodorec's business philosophy is: &quot;Integrity service, good details, and reassurance for merchants&quot;. The purpose of Theodorec enterprise is: &quot;Unity, Mutual Help, Gratitude, Sharing&quot;.\n\nPlease read Complying with the Platform Rules:\n   1. In order to prevent money laundering, malicious withdrawals, use of multiple accounts to operate and other violations of platform rules, and to avoid infringing on the interests of the platform and merchants, as well as the reputation ranking, member users must abide by the order of operating the platform with one mobile phone and one account. If it is found that the platform rules are violated, the member account will be directly banned.\n   2. Before withdrawing money, please confirm whether the address is correct. If you fill in the wrong address, transfer to the wrong address, etc., you will be responsible for yourself. The arrival time is no more than 24 hours, and the specific arrival time varies with network nodes.","lang":"en"}]}})})


app.listen(port, () => {
    console.info('servidor aberto: https://localhost:3000')})
     
