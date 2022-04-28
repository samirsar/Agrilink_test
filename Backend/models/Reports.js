const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const ReportSchema = new Schema({
    reportDetails:{
        type:Object,
        required:true
    }
    
  });

//   module.exports=mongoose.model('user',UserSchema);
const User=mongoose.model('Reports',ReportSchema);
// Myuser naam ka database ban jaayega
// User.createIndexes();

module.exports=User;