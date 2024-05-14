/* 连接数据库 启动接口 */
const mongoose=require('mongoose')
/* 引入app */
const app=require('./app')
mongoose.connect('mongodb+srv://jxiaosi:Jxs123456@cluster0.dic7v9k.mongodb.net/masterDatabase?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connection.on('open', ()=>{
    console.log('connection success')
    
})
mongoose.connection.on('error', ()=>{console.log('connection failure')})
/* 启动接口 */
app.listen('8000', ()=>{
    console.log('the server is running')
})