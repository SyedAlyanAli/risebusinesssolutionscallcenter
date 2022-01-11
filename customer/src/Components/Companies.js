import React ,{useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getcompanydetails,companyedit ,getcompanyfiledetails,getCompanies} from "../store/action/company";
import {getfiledetails} from "../store/action/savefile";
import Select from 'react-select';
import {useDispatch,useSelector} from 'react-redux'
import {  State, City }  from 'country-state-city';
import { Link } from "react-router-dom";
import moment from 'moment';


const States= State.getStatesOfCountry("US")
const Cities = City.getCitiesOfState("US","AL")

const Equipments=[
    {
      value:"flatbed", label:"Flatbed"
    },
    {
     value:"stepdeck", label:"Step-Deck"
   },
   {
     value:"conestoage", label:"Conestoga"
   },
   {
     value:"van", label:"Van"
   },
   {
    value:"refer", label:"Refer"
  }
  ]

  const Commodities=[
    {
      value:1, label:"Lumber"
    },
    {
     value:2, label:"Steel"
   },
   {
     value:3, label:"Stones"
   },
   {
     value:4, label:"Plastic"
   },
  ]



function Companies(){

       let { id,companyname,status ,userId} = useParams();

        const dispatch =useDispatch()
        const comp= useSelector((state)=>state.comp)
        const auth= useSelector((state)=>state.auth)

        const [next,setNext] = useState(false)
        const [editValue, seteditValue] = useState(false)
        const [index,setIndex] = useState(0)
        const [increment,setIncrement] =useState('')
      

        useEffect(()=>{

          if(companyname){
         
              dispatch(getcompanydetails(id))
             } 
     },[id,companyname])
     

    useEffect(()=>{
    
         
           dispatch(getCompanies())
      
     },[])


    console.log(comp.getcompanies)

         const [state,setState] =useState({
       


             companyname:'',
             //((comp.getcompanyfiledetail.companyname) && comp.getcompanyfiledetail.companyname ?comp.getcompanyfiledetail.companyname: null) || ((comp.getcompany.companyname) && comp.getcompany.companyname ?  comp.getcompany.companyname :null)  ,
            cphone:'',
             
             fax:'',
            // comp.getcompanyfiledetail[0].FAX?comp.getcompanyfiledetail[0].FAX:comp.getallcomp.fax,
             address:'',
             //comp.getcompanyfiledetail[0].ADDRESS?comp.getcompanyfiledetail[0].ADDRESS:comp.getallcomp.address,
             city:'',
             //comp.getcompanyfiledetail[0].CITY?comp.getcompanyfiledetail[0].CITY:comp.getallcomp.city,
             state:'',
             //comp.getcompanyfiledetail[0].STATE?comp.getcompanyfiledetail[0].STATE:comp.getallcomp.state,
             zip:'',
            // comp.getcompanyfiledetail[0].ZIP?comp.getcompanyfiledetail[0].ZIP:comp.getallcomp.zip,
             person:'',
           //  comp.getcompanyfiledetail[0].PERSON?comp.getcompanyfiledetail[0].PERSON:comp.getallcomp.person,
             phone:'',
            // comp.getcompanyfiledetail[0].PHONE?comp.getcompanyfiledetail[0].PHONE:comp.getallcomp.phone,
             email:'',
            // comp.getcompanyfiledetail[0].EMAIL?comp.getcompanyfiledetail[0].EMAIL:comp.getallcomp.email,
             comment:'',
            // comp.getcompanyfiledetail[0].COMMENT?comp.getcompanyfiledetail[0].COMMENT:comp.getallcomp.comment,
             status:'',
            // comp.getcompanyfiledetail[0].STATUS?comp.getcompanyfiledetail[0].STATUS:comp.getallcomp.status,
             cemail:'',
            // comp.getcompanyfiledetail[0].CEMAIL?comp.getcompanyfiledetail[0].CEMAIL:comp.getallcomp.cemail,
             frequency:'',
            // comp.getcompanyfiledetail[0].FREQUENCY?comp.getcompanyfiledetail[0].FREQUENCY:comp.getallcomp.frequency,
             equipment:'',
            // comp.getcompanyfiledetail[0].EQUIPMENT?comp.getcompanyfiledetail[0].EQUIPMENT:comp.getallcomp.equipment,
             commodities:'',
             //comp.getcompanyfiledetail[0].COMMODITIES?comp.getcompanyfiledetail[0].COMMODITIES:comp.getallcomp.commodities,
             product:'',
             //comp.getcompanyfiledetail[0].PRODUCT?comp.getcompanyfiledetail[0].PRODUCT:comp.getallcomp.product,
                     
    }
     )
 
      //   useEffect(()=>{

      //       if(companyname){
      //         console.log("useEffect1")
      //           dispatch(getcompanydetails(id))
      //          } 

              
      //      },[id])
       
      // useEffect(()=>{
      //    if(status && userId){
      //      console.log("useEffect2")
      //        dispatch(getcompanyfiledetails(id,userId))
      //   }
      //  },[id])
      
   
     const moveNext = () => {
         // setNext(true)
          //setIndex(index + 1)
          if(auth.user.role === "admin"){
            setIncrement(comp.getcompanies[index])
          }
          if(comp.getcompanybyuser.length){
            setNext(true)
          setIncrement(comp.getcompanybyuser[index])
          setIndex(index + 1)
          }
          //setIndex(index + 1)
          else if (comp.getallcomp.length){
            setNext(true)
            setIncrement(comp.getallcomp[index])
            setIndex(index + 1)
            }
          
          }
        
          
         
        
         
        
          
       
       
      



    const handleChange = (evt) => {
    const value = evt.target.value;
          setState({
          ...state,
          [evt.target.name]: value
        });
    
    }

      function handleSelectEquipment(equipment) {
            setState({...state,equipment});
       }
      
      function handleSelectCommodities(commodities) {
        setState({...state,commodities});
       }

    const handleEdit=(e)=>{
           e.preventDefault();
    
     let companyupdate = {
        companyname:state.companyname,
        cphone:state.cphone,
        fax:state.fax,
        address:state.address,
        city:state.city,
        state:state.state,
        zip:state.zip,
        person:state.person,
        phone:state.phone,
        email:state.email,
        comment:state.comment,
        status:state.status,
        cemail:state.cemail,
        frequency:state.frequency,
        equipment:state.equipment,
        commodities:state.commodities,
        product: state.product,
        id:id
    }
    dispatch(companyedit(companyupdate))
}


      
        
       
    return(

                  <div class="container bg-light w-75 mt-3  border rounded-3 shadow-lg pb-2  ">


                <header>
                  <div class="px-3 py-2">
                       <div class="align-items-center justify-content-between justify-content-lg-start">
                          <a href="/" class="d-flex align-items-center ">
                         </a>
                       
                          <ul class=" line nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                               <li>
                               <Link to="/home"><a href="#" class="nav-link text-secondary text-decoration-none">Home</a></Link> 
                               </li>

                                <li>
                                 <a class="nav-link text-secondary ">Customers</a>
                               </li>
                               
                                <li>

                                <Link to="/carry"><a href="#" class="nav-link text-secondary">Carriers</a></Link> 
                               </li>
                           </ul>
                       </div>
                    </div>
              </header>


              
                       <div class="row">
                       <div class="col-md-9 col-sm-12" >
                    <div class="mb-3 row pt-2">
                      <label  class="form-label  col-sm-2 col-form-label">Company Name</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control fw-bold" name="companyname" 
                           value={((!editValue && next?increment.companyname:null)   || (!next && editValue ?state.companyname:comp.getcompany.companyname) )}
                           onChange={handleChange} />
                      </div>
                  </div>

                   <div class="mb-3 row">
                       <label class=" form-label col-sm-2 col-form-label">Phone</label>
         
                       <div class="col-sm-10">
                          <input type="text" class="form-control"  name="cphone"
                          value={( (!editValue && next?increment.cphone:null)    || (!next && editValue ?state.cphone:comp.getcompany.cphone))}
                          
                          onChange={handleChange}  />
                      </div>
                  </div>


                   <div class="mb-3 row">
                        <label  class="form-label  col-sm-2 col-form-label">Fax</label>
                        <div class="col-sm-10 ">
                           <input type="text" class="form-control"  placeholder="" name="fax" 
                           value={( (!editValue && next?increment.fax:null)   || (!next && editValue ?state.fax:comp.getcompany.fax))}
                            onChange={handleChange}  />
                        </div>
                  </div>

                  <div class="mb-3 row">
                      <label  class="form-label col-sm-2 col-form-label">Address :</label>
                      <div class="col-sm-10">
                      <input  class="form-control" name="address"  
                     value={ ((!editValue && next?increment.address:null)    || (!next && editValue ?state.address:comp.getcompany.address))}
                      onChange={handleChange} />
                     </div>
                 </div>



                 <form class="row g-3 ">
                    <div class="col-md-6">
                         <label class="form-label">City</label>
                           <select class="form-select" name="city"
                               value={ ((!editValue && next?increment.city:null)    || (!next && editValue ?state.city:comp.getcompany.city))}
                               onChange={handleChange}>
                           {Cities.map((getcity,index)=>{
                                 return(
                                      <option key={index}>{getcity.name}</option>
                                  )
                             })
                             }
                               <option></option>
                           </select>
                     </div>

                       
                  <div class="col-md-4">
                          <label class="form-label">State</label>
                      <select  class="form-select" name="state" 
                             value={((!editValue && next?increment.state:null)    || (!next && editValue ?state.state:comp.getcompany.state))}
                             onChange={handleChange}>
                            {States.map((getstate,index)=>{
                                 return(
                              <option key={index}>{getstate.isoCode}</option>
                              
                              )})}
                              <option></option>
                      </select>
                </div>

                    <div class="col-md-2">
                         <label  class="form-label">Zip</label>
                         <input  class="form-control" name="zip"
                         onChange={handleChange}  
                         value={((!editValue && next?increment.zip:null)    || (!next && editValue ?state.zip:comp.getcompany.zip))}
                         />
                    </div>

                  </form>
                   

                  <div >
                      <h4 class="mt-2 fw-bold" style={{color: "#6748f0"}}>Contact Person</h4>
                 </div>


                 <div class="mb-3 row pt-2">
                      <label  class="form-label  col-sm-2 col-form-label">Name</label>
                       <div class="col-sm-6">
                           <input  class="form-control" name="person"  
                           value={((!editValue && next?increment.person:null)    || (!next && editValue ?state.person:comp.getcompany.person))}
                            onChange={handleChange} />
                           
                      </div>
                  </div>


                  <div class="mb-3 row">
                       <label  class=" form-label col-sm-2 col-form-label">Phone</label>
         
                       <div class="col-sm-6">
                          <input type="text" class="form-control" name="phone" 
                          value={((!editValue && next?increment.phone:null)    || (!next && editValue ?state.phone:comp.getcompany.phone))}
                           onChange={handleChange}  />
                      </div>
                  </div>


                  <div class="mb-3 row">
                      <label  class="form-label  col-sm-2 col-form-label">Email</label>
                       <div class="col-sm-6">
                           <input type="email" class="form-control" name="email"
                           value={((!editValue && next?increment.email:null)    || (!next && editValue ?state.email:comp.getcompany.email))}
                           onChange={handleChange}  />
                      </div>
                  </div>

                   <div class="row">
                      <label  class="form-label  col-sm-2 col-form-label">Comments</label>
                       <div class="col-sm-6 ">
                           <input type="text" class="form-control fw-bold text-danger text-uppercase" 
                           name="comment"
                           value={ ((!editValue && next?increment.comment:null)    || (!next && comp.getcompany.comment))
                           //comp.getcompany.updatedAt
                            //moment( comp.getcompany.updatedAt).format("DD-MM-YYYY")
                           }
                            onChange={handleChange} />
                      </div>
                   </div>

                   <div class="row mt-2">
                      <label  class="form-label  col-sm-2 col-form-label">User Name</label>
                       <div class="col-sm-6 ">
                           <input type="text" class="form-control fw-bold text-primary text-uppercase" 
                           name="comment"
                           value={
                                  comp.getcompany.firstname
                                 }
                            onChange={handleChange} />
                            {moment( comp.getcompany.updatedAt).format("DD-MM-YYYY ")}<span class="p-2">
                            {moment( comp.getcompany.updatedAt).format(" hh:mm:ss")}</span>
                       </div>
                   </div>


                   {/* <div class="row mt-2">
                      <label  class="form-label  col-sm-2 col-form-label">Time</label>
                       <div class="col-sm-6 ">
                           <input type="text" class="form-control fw-bold text-secondary text-uppercase" 
                           name="comment"
                           value={editValue ?
                                  //state.createdAt
                           //state.comment
                           null
                            :
                            //comp.getcompany.comment
                           //comp.getcompany.updatedAt
                            moment( comp.getcompany.updatedAt).format(" hh:mm:ss")
                          }
                            onChange={handleChange} />
                      </div>
                   </div>

                   <div class="row mt-2">
                      <label  class="form-label  col-sm-2 col-form-label">Date</label>
                       <div class="col-sm-6 ">
                           <input type="text" class="form-control fw-bold text-secondary text-uppercase" 
                           name="comment"
                           value={editValue ?
                                  //state.createdAt
                            //state.comment
                            null
                            :
                            //comp.getcompany.comment
                           //comp.getcompany.updatedAt
                            moment( comp.getcompany.updatedAt).format("DD-MM-YYYY ")
                          }
                            onChange={handleChange} />
                      </div>
                   </div> */}
                   <div class="d-flex">
                   </div>

                </div>
                  

                  
                   <div class="col-md-3 col-sm-12 p-2 container">
                      <div class="row">
                           <div class="col">
                              <button type="button" class="btn btn-primary  w-100" onClick={()=>seteditValue(true)} style={{backgroundColor: "#6748f0"}}>Edit</button>
                         </div>
                         <div class="col">
                            <button type="button" class="btn btn-secondary w-100" style={{backgroundColor: "#848285"}}   onClick={moveNext}>Next</button>
                          </div>
                       </div>


                    <div class="mt-2 border border-3 rounded p-2  ">
                        <div class="mt-2 ">
                          <div class="input-group input-group-sm mb-3 ">
                              <span class="input-group-text fw-bold fs-6 inputGroup-sizing-sm " style={{color: "#6748f0"}}>Status</span>
                              <input type="text" class="form-control col-sm-2 col-form-label " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="status"
                              value={((!editValue && next?increment.status:null)    || (!next && editValue ?state.status:comp.getcompany.status ))}
                              onChange={handleChange} />
                         </div>
                         </div>


                         <div class="mt-2">
                          <div class="input-group input-group-sm mb-3">
                              <div class="input-group-text fw-bold fs-6" id="inputGroup-sizing-sm " style={{color: "#6748f0"}}>Email</div>
                              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="cemail"
                             value={((!editValue && next?increment.cemail:null)    || (!next && editValue ?state.cemail:comp.getcompany.cemail))}
                              onChange={handleChange} />
                         </div>
                         </div>


                         <div class="mt-2">
                          <div class="input-group input-group-sm mb-3">
                              <span class="input-group-text fw-bold fs-6 " id="inputGroup-sizing-sm " style={{color: "#6748f0"}}>Frequnecy</span>
                              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="frequency"
                             value={((!editValue && next?increment.frequency:null)    || (!next && editValue ?state.frequency:comp.getcompany.frequency)) }
                              onChange={handleChange} />
                         </div>
                         </div>


                         <div class="mt-2 mb-3">
                          <div class="input-group input-group-sm mb-2 ">
                              <span class="input-group-text fw-bold fs-6  form-control inputGroup-sizing-sm" style={{color: "#6748f0"}}>Product</span>
                              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="product"
                                value={((!editValue && next?increment.product:null)    || (!next && editValue ?state.product:comp.getcompany.product))}
                                onChange={handleChange} />
                         </div>
                         </div>
                         

                         <div class="mt-2 mb-2" >
                              <Select isMulti placeholder="Equipments" name="equipment" 
                                   value={((!editValue && next?increment.equipment:null)    || (!next && editValue ?state.equipment:comp.getcompany.equipment))}
                                   onChange={handleSelectEquipment} 
                                   options={Equipments}
                                />
                          </div>


                          <div class="mt-2 mb-3" >
                               <Select isMulti   placeholder="Commodities" name="commodities"
                                 value={((!editValue && next?increment.commodities:null)    || (!next && editValue ?state.commodities:comp.getcompany.commodities))}
                                 onChange={handleSelectCommodities}
                                 options={Commodities}
                                />
                          </div>


                         

                        
                            <button type="button" class="btn btn-dark w-100" onClick={handleEdit} >Done</button>
                        
                  </div>
               </div>
             </div>
           </div>
          )
        }

export default Companies;