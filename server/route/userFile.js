const express = require('express')
const router = express.Router()

const {savefile,getfile,getfileadmin,getallfilecounts,getfiledetail,getfileuser,fileedited} = require("./../controller/userFile")
  
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    // filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // }
  })
  
  const upload = multer({ storage: storage })
  



router.post('/savefile/:id',upload.single("file"),savefile)
router.get('/getfile/:id',getfile)
router.get('/getfileadmin',getfileadmin)
//router.get('/getfileuser/:skip/:limit/:userId',getfileuser)
router.get('/getallfilecounts',getallfilecounts)
router.get('/getcompanyfiledetails/:userId/:id',getfiledetail)
router.put('/fileedit/:id/:userId',fileedited)
module.exports=router