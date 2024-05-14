const mongoose=require('mongoose')
const novels=require('./rawData')
mongoose.connect('mongodb+srv://jxiaosi:Jxs123456@cluster0.dic7v9k.mongodb.net/masterDatabase?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connection.on('open', ()=>{
    console.log('connection success')
    const BookSchema=new mongoose.Schema({
        name:String,
        author:String,
        price:Number,
        is_hot:Boolean
    })
    const BookModel=new mongoose.model('book', BookSchema)
    
    BookModel.create(novels).then(data=>{
        console.log('success~')
    }).catch(err=>{
        console.log(err)
    })
})
mongoose.connection.on('error', ()=>{console.log('connection failure')})
