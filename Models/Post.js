const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true
   },
   description:{
       type:String
   },
   date:{
       type:Date,
       default:Date.now
   }
});

module.exports = User = mongoose.model('post',postSchema);