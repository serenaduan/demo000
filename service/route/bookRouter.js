const express=require('express')
const route=express.Router()
/* 引入非默认暴露的getBooks */
const {getBooks,updateBooks,deleteBooks,createBooks}=require('../controller/BookController')

/* 获取图书，访问接口以后读取数据，操作数据库，路由把请求过来的数据返回给客户端 */

route.get('/getBooks',(req, res)=>{
 getBooks(req.query.name).then(data=>{
    console.log(req.query.name)
    res.send(data)
 })

})

route.get('/updateBooks',(req, res)=>{
    updateBooks().then(data=>{
       console.log(data)
       res.send(data)
    })
   
   })

route.delete('/deleteBooks/:name',(req, res)=>{
    deleteBooks(req.params).then(data=>{
       console.log(req.params)
       res.send(data) 
       
    })
   
   })

route.post('/createBooks',(req, res)=>{
   console.log(req.body)
   createBooks().then(data=>{
       console.log(data)
       res.send(data)
    })
   
   })
module.exports=route