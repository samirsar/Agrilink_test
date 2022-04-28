const express=require('express');
const router=express.Router();

const Reports =require('../models/Reports');

router.post('/createreport',

async(req,res)=>{
    const temp=await Reports.findOne(req.body);

    if(temp)
    {   

       return res.send({status:"success",message:"You have already submit it"});

    }
    await Reports.create({
        reportDetails:req.body.reportDetails
        
      }).then(report => {
        

        
        res.send({status:"success",
            reportId:report._id
          })
      });

    



}
)
router.get('/getreport',

async(req,res)=>{
    const temp=await Reports.findOne({
        _id:req.body.userId
    });

    if(temp==null)
    {   

       return res.send({status:"success",message:"Did not found any reports"});

    }
    else{
          res.send({
              status:"success",
              data:temp
          })
    }
    
    



}
)




module.exports=router