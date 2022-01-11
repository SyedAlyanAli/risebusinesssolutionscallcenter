const Company =require("./../model/company");



exports.companyinfo = (req,res) => {


   
          const newCompany= new Company({
           
        companyname:req.body.companyname,
        cphone:req.body.cphone,
        fax:req.body.fax,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        person:req.body.person,
        phone:req.body.phone,
        email:req.body.email,
        comment:req.body.comment,
        status:req.body.status,
        cemail:req.body.cemail,
        frequency:req.body.frequency,
        equipment:req.body.equipment,
        commodities:req.body.commodities,
        product:req.body.product,
        userId:req.body.userId,
        firstname:req.body.firstname
          })
          newCompany.save()
          .then((created)=>{
              
              res.json(created)
          })
          .catch((err)=>{
              console.log("ERR",err)
          })
}

exports.getComp = (req,res) => {
  const adsPerPage =4
 
  let skip = parseInt(req.params.skip) 
  
  let limit = parseInt(req.params.limit) 

  Company.find({}).sort([['companyname', 'ascending']])
  .skip(skip)
  .limit(5)
  
  .then((getcomp) =>{
  
    res.json(getcomp)
  })
  .catch((err)=>{
    console.log(err)
  })
}


exports.getCompanybyuser = (req,res) => {
 
 
  let skip = parseInt(req.params.skip) 
 
    
  let limit = parseInt(req.params.limit)
  
   Company.find({userId:req.params.userId}).sort([['companyname', 'ascending']]).skip(skip).limit(5)
   
   
   .then((getcomp) =>{
     
     res.json(getcomp)
   })
   .catch((err)=>{
     console.log(err)
   })
 }




exports.getCompanies = (req,res) => {
 
 
 
  Company.find({}).sort([['companyname', 'ascending']])
  
  
  .then((getcomp) =>{
   
    res.json(getcomp)
  })
  .catch((err)=>{
    console.log(err)
  })
}









exports.getcompanydetail = (req,res) => {
   
    Company.findById({_id: req.params.id})
    .then((getdetail)=>{
     
      res.json({getdetail})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  exports.companyedit = (req,res) => {
   
      Company.findOneAndUpdate({_id: req.params.id},
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

      .then((getdetail)=>{
       
        res.json({getdetail})
      })
      .catch((err)=>{
        console.log(err)
      })
      
    
    

  }
  

  exports.findcompany = (req,res) => {
    
    var searchRegex = new RegExp(req.query.keyword, 'i');
    Company.find().or([
      { 'companyname': { $regex: searchRegex } },
     
    ])
     .then((searchdata)=>{
     
        res.json({searchdata})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  

    exports.delcomp = (req,res) => {
     
      Company.findOneAndDelete({_id:req.params.id})
      
       .then((deldata)=>{
        
          res.json({deldata})
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    


      exports.getcompanycounts = (req,res) => {
     
        Company.estimatedDocumentCount({})
        .then((count)=>{
            
          
            res.json(count)
        })
        .catch((err)=>{
            console.log("ERR",err)
        })
        }