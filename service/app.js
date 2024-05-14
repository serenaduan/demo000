/* 客户端相关内容 router中间件 */
const express=require('express')
const app=express()
const cors=require('cors')
const router=require('./route/bookRouter')
/* 安装后引入插件 */
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

app.use(router)
/* 暴露app */
module.exports=app