const express=require('express');
const app=express();
const dbConnection = require("./mongodb");
const mongodb=require('mongodb')

// Middle Ware to get data in json Format;
app.use(express.json());




// ***************** GET API ***********************
app.get('/',async(req,res)=>{
    const db=await dbConnection();
    const data=await db.find().toArray();
    console.log(data);
    res.send(data);
});

// **************** POST API ***********************
app.post('/',async (req,res)=>{
    let data=req.body;
    const db=await dbConnection();
    const insertData=await db.insertOne(data);
    res.send(insertData);
   
});

// **************** PUT API ************************
app.put('/',async(req,res)=>{
let name=req.body.name;
let updatedData=req.body;
const db=await dbConnection();
const updateResult=await db.updateOne({name:name},{$set:updatedData});
console.log(updateResult);
res.send(updateResult)
});


// ****************** DELETE API ******************
app.delete('/:id',async (req,res)=>{
     let id=req.params.id;
     const db=await dbConnection();
     const deleteResult=await db.deleteOne({_id:new mongodb.ObjectId(id)})
     res.send(deleteResult)
})

app.listen(5001);