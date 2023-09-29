const logEvent=(req,res,next)=>{
    if(req.query.age){
        console.log("id is avaliable");
    }
    else if(!req.query.age){
        console.log("id is Not avaliable");
    }
    next();
  
}

const ageChecker=(req,res,next)=>{
    const age=req.query.age
    if(age){
        console.log(`Age is ${age}`)
    }
    else if(!age){
       res.send('Please Add you age in params')
    }
    next();
}
module.exports={logEvent,ageChecker};


