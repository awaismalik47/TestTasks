const express = require("express");
const app = express();
const Cors = require("cors");
require("./config");
app.use(express.json());
app.use(Cors());

const { Points ,validProduct} = require('./product'); // Import the Mongoose model
// const Points = require("./product");


// ************* Post Api *****************
app.post("/addPoint", async (req, res) => {
  console.log("in add point...");
  try {
    console.log(req.body);
    const newPoint = new Points(req.body);
    const savedPoint = await newPoint.save();
    return res.status(200).json({
      status: true,
      data: savedPoint
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// ************* Get Api ******************
app.get("/getPoints", async (req, res) => {
  try {
    let data = await Points.find();
    return res.status(200).json({
      status: true,
      result:data.length,
      data: data
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});





// ************ Delete Api **************
app.delete("/deletePoints", async (req, res) => {
  const result = await Points.deleteMany({});
    res.status(200).json({
      status:true,
      data:result,
      message:"Product Deleted SuccessFully"
    })
 
});






const port=3300;
app.listen(port,()=>{
  console.log("server listening on ",port);
});
