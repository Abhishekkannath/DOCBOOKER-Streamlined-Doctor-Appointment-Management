var db=require('../config/connection')
module.exports={

    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection('doctor').insertOne(product).then((data)=>{
            console.log(data)
            callback(data)
        })
    }
}