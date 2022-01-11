const  UserFile=require("./../model/userFile");
const csv = require('csvtojson')
const mongoose = require("mongoose")


exports.savefile = async  (req,res) => {
    try {
            if (req.file == undefined) {
                return res.send({
                    message: "Please upload a CSV file!"
                });
            }
            let filePath = 'uploads/' + req.file.filename;

        
        const jsonObj = await csv().fromFile(filePath)
        
      const userId =req.params.id
      const response = await UserFile.findOne({userId})
       
       
                 if(response === null){
                     const result = await  UserFile.insertMany({Data:jsonObj,userId})
                     
                     res.status(200).send({
                     message:
                   "Upload/import the CSV data into database successfully: " + req.file.originalname,
           })
          }
          
    
                  if(mongoose.Types.ObjectId(response.userId).valueOf() ===  req.params.id){
                
                    const result = await   UserFile.updateMany({ $addToSet: { Data: jsonObj }})
                               
                   
                      res.status(200).send({
                          message:
                              "Upload/import the CSV data into database successfully: " + req.file.originalname,
                      });
               }

                    }
                    catch(err){
                        console.log(err)
                    }
}



exports.getfile = (req,res) => {
    
   
 
        UserFile.findOne({userId:req.params.id})
             .then((getfilebyuser)=>{
               
            
                 res.json(getfilebyuser)
             })
             .catch((err)=>{
                 console.log("ERR",err)
             })
   }

   exports.getfiledetail = (req,res) => {
   
 
   UserFile.findOne({userId:req.params.userId},
   {Data:{$elemMatch:{_id:req.params.id}}}
   )
        
             .then((datafile)=>{
               
             
                 res.json(datafile)
             })
             .catch((err)=>{
                 console.log("ERR",err)
             })
   }



   exports.fileedited = async  (req,res) => {
       
      const result  = await UserFile.findOne({userId:req.body.userId},
        {Data:{$elemMatch:{_id:req.body.id}}}
        )

  const updatecompany= await  UserFile.findOneAndUpdate(
    {_id:result.id},
   
    {
      companyname:req.body.companyname,
      cphone:req.body.cphone,
      fax:req.body.fax,
      address:req.body.address,
      city:req.body.city,
      state:req.body.state,
      zip:req.body.zip,
      person:req.body.person,
      email:req.body.email,
      comment:req.body.comment,
      status:req.body.status,
      cemail:req.body.cemail,
      frequency:req.body.frequency,
      equipment:req.body.equipment,
      commodities:req.body.commodities,
      product:req.body.product,
      
    },
    
    
    {
      new: true,
      runValidators: true,
      useFindAndModify: false
  },
    )

 
    
    res.status(200).json({result:updatecompany})
  

}






   exports.getfileadmin = async (req,res) => {
      
    const adsPerPage =4
   
    let skip = req.params.skip ? parseInt(req.params.skip) : 0;
    let i;
    const result = await UserFile.aggregate([{$project: { _id: 0, Data: 1 } },
    {$unwind: "$Data" }])
     //console.log("result fileadmin",result[i].Data[j])

    //    for(let j=0;j <= result[i].Data[j].length; j++){
           
    //   if(result[i].Data.length){
             
    //     var result1 =  result[i].Data.map((comp)=>{
    //                return(
                      
    //                  {comp} 
                     
    //                )
                 
    //          })
    //   }
    //   i++;
       
    //    }

       console.log("result fileadmin",result)
     
       res.status(200).json({result:result})
      
    
   }



//    exports.getfileuser = async (req,res) => {
   
//  const adsPerPage =4
 
//  let skip = req.params.skip ? parseInt(req.params.skip) : 0;
//   const result = await UserFile.find({userId:req.params.userId})
 
//     for(let i=0;i <= result.length; i++){
        
   
          
//      var result1 =  result[i].Data.map((comp)=>{
//                 return(
                   
//                   {comp} 
                  
//                 )
              
//           })
         
    
//     }
  
//    const result2 =result1.skip(skip).limit(parseInt(req.params.limit))
  
//     res.status(200).json({result2:result2})
   
 
// }



   exports.getallfilecounts = (req,res) => {
    
    UserFile.aggregate(
      
        [
        {
           $project: {
              Data: 1,
              Data: { $cond: { if: { $isArray: "$Data" }, then: { $size: "$Data" }, else: "NA"} }
           }
           
          
        },
        {$group : {_id : "$Data", num_tutorial : {$sum : "$Data"}}}
        ,
        {$group : {_id : "$Data", totalSize : {$sum : "$num_tutorial"}}}
     ] 
     )
     

     
      
       
             .then((count)=>{
              
               
                 res.json(count[0].totalSize)
             })
             .catch((err)=>{
                 console.log("ERR",err)
             })
   }