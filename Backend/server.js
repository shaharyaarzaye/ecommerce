const express = require('express')
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs');
let total = 0;
let orders;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/addtocart' , (req , res) =>{
    console.log('product request')
     orders = Number(req.body.price)
     console.log(orders)
    total += orders
    console.log(total)
    res.redirect('https://probable-space-cod-g6grj4v74wwcpgj5-5500.app.github.dev/Frontend/shoechekout.html')
})


app.get('/shoppingcart', (req , res) =>{
    res.render('cart' , {total})
})

console.log(total)
app.listen("3000" , ()=>{
    console.log("app is live on 3000")
    
})