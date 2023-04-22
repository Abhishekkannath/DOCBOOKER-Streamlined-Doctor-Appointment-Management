var db=require('../config/connection')
const collections = require('../config/collections');
module.exports={

    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection(collections.DOCTOR_COLLECTION).insertOne(product).then((data)=>{
            console.log(data.insertedId)
            callback(data.insertedId);
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let doctors=await db.get().collection(collections.DOCTOR_COLLECTION).find().toArray()
            resolve(doctors)
        })
    }
}