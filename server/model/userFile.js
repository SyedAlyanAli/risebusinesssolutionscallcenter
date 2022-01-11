const mongoose = require("mongoose")
  const { Schema } = mongoose;
  const {ObjectId} = mongoose.Schema.Types

  const UserFile = new Schema({

   userId:{
    type : ObjectId,
    ref:"User"
    },
    
    Data:[{companyname:{
      type:String,
      
  },
  cphone:{
      type:String,
      
  },
  fax:{
      type:String,
     
  },
  address:{
   type:String,
  
 },

  city:{
      type:String,
     
  },
  state:{
      type:String
  },

 zip:{
   type:String,
  
 },

 person:{
   type:String,
  
 },
 
 phone:{
   type:String,
  
 },

 email:{
   type:String,
  
 },

 comment:{
   type:String,
  
 },

 status:{
   type:String,
  
 },

 cemail:{
   type:String,
  
 },

 frequency:{
   type:String,
  
 },

 equipment:{
    type:Array,
  },

 commodities:{
   type:Array,
  
 },

 product:{
   type:String,
  
 },

 }
    ]

  });

  module.exports = mongoose.model('UserFile', UserFile);