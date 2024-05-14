const mongoose=require('mongoose')
const novels=require('./rawData')
mongoose.connect('mongodb://127.0.0.1:27017/class')
mongoose.connection.on('open', ()=>{
    console.log('connection success')
    const BookSchema=new mongoose.Schema({
        name:String,
        author:String,
        price:Number,
        is_hot:Boolean
    })
    const BookModel=new mongoose.model('book', BookSchema)
    
    BookModel.updateMany({price:19.9}, {price:21.9}).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
    BookModel.find({price:21.9}).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
})
mongoose.connection.on('error', ()=>{console.log('connection failure')})
