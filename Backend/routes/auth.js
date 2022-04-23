const express=require('express');
const bcrypt = require('bcryptjs');
const router=express.Router();
const Myuser=require('../models/User')// import User database as Myuser





// for creating a user we will hit this url 
// authentication is not require

// following seven line code determine username and email is valid or not
// creating user 

const JWT_sectret="Mynameissamirkumar";
const jwt = require('jsonwebtoken');

const { body, validationResult } = require('express-validator');// localhost/api/auth/creatuser
const fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
router.post('/createuser',[
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
],
//validation end

async (req,res)=>{

    




// if this function reture bad request 
// when authentication in not good
const errors =   validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message:"some error has been occured" });
    }
   const salt = await bcrypt.genSaltSync(10);
   var securepassword = await bcrypt.hashSync(req.body.password, salt);
 

    const temp=await Myuser.findOne({
      email:req.body.email,
      
    })

    if(temp)
    {   

       return res.send({success:false,message:"This email is already exist"});

    }
    
    await Myuser.create({
        name: req.body.name,
        password: securepassword,
        email:req.body.email,
        address:req.body.address
      }).then(user => {
        const data={
          user:{
            id:user.id
          }
        }
        var auth_token = jwt.sign(data, JWT_sectret);
        
        res.send({success:true,
          auth_token})
      });

  
})

// ending of creating user


//  starting of endpoint of login
// no sign in require
router.post('/login',[
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
],


async (req,res)=>{

  console.log(req.body)

const errors =   validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({"success":false, message:"Your email and password is incorrect" });
  }


  const user=await Myuser.findOne({
    email:req.body.email
  })
// if no match username and password
  if(!user)
  {   

     return res.send({
       "success":false,
       "msg":"please enter correct credential"
     });

  }

  // if match email and password
  
  let comparepassword=bcrypt.compareSync(req.body.password, user.password); // true
  if(!comparepassword)
  {
    return res.status(400).json({"success":false, message:"Your email and password is incorrect" });
  }
  else
  {
    const data={
      user:{
        id:user.id
      }
    }
    var auth_token = jwt.sign(data, JWT_sectret);
    
    res.send({
      success:true,

      auth_token})
  }

})


router.post('/getuser',fetchuser,
  
  
  async (req,res)=>{
    try {

      userId=req.user.id;
      const user=await User.findById(userId).select("-password");
      console.log(user);

      res.send(user);
      
    } catch (error) {
      return res.status(401).json({"success":false, message:"access denied" });
      
    }
  
    
  }
  
  )
  router.post('/updateprofile',[
    body('name').isLength({ min: 5 }),
  
    
],
//validation end

async (req,res)=>{

    




// if this function reture bad request 
// when authentication in not good
const errors =   validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message:"some error has been occured" });
    }
  
    // let temp=await Myuser.findOne({id:"req.body.id"})
  
    // console.log(temp,"What is your detail",req.body.id)
 
    
    let ans=await Myuser.updateOne({_id:req.body.id},{
      $set:{
        name:req.body.name,
        address:req.body.address

      }
    }


  
  )


   res.send({
     success:true,
     msg:"Successfully update"
   })



    

   
    
   

  
})



module.exports=router;