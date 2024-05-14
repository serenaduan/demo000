/* novel相关的model */
const mongoose=require('mongoose')
const BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    is_hot:Boolean
})
const BookModel=new mongoose.model('book', BookSchema)

/* 暴露 BookModel*/
module.exports=BookModel