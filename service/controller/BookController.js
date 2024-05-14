/*处理class数据库的增删改查 */
const BookModel=require('../model/BookModel')
/*用exports暴露，追加API  */
/* exports.getBooks=()=>{
     return BookModel.find().then(data=>{
        return data
    }).catch(err=>{
        console.log(err)
    }) */


exports.getBooks=async(name)=>{
   try{
    return await BookModel.find({name})
   } catch(error){
    return 'error'
   }
}

exports.updateBooks=async()=>{
    try{
     return await BookModel.updateOne()
    } catch(error){
     return 'error'
    }
 }
 exports.deleteBooks=async(name)=>{
    try{
     return await BookModel.deleteOne(name)
     console.log('success')
    } catch(error){
     return 'error'
    }
 }
 exports.createBooks=async()=>{
    try{
     return await BookModel.create()
    } catch(error){
     return 'error'
    }
 }
    
        
    


