const express = require('express')
const router = express.Router()
const {companyinfo,getComp,getcompanydetail, companyedit,findcompany,delcomp,getcompanycounts,getCompanies,getCompanybyuser} = require("./../controller/company")


const {requireSignin} = require("./../middleware/auth")


  
  router.post("/registercompany",requireSignin,companyinfo)
  router.get("/getcompany/:skip/:limit",requireSignin,getComp)
  router.get("/getcompanybyuser/:skip/:limit/:userId",getCompanybyuser)
  router.get("/getcompanydetails/:id",requireSignin,getcompanydetail)
  router.put("/companyedit/:id" ,companyedit)
  router.get('/findcompany',findcompany)
  router.delete('/delcomp/:id',delcomp)
  router.get('/getcompanycounts',getcompanycounts)
  router.get("/getcompany",getCompanies)
  
  module.exports=router