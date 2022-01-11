import React,{useEffect,useState ,Fragment} from "react";
import {Link } from 'react-router-dom'
import {getCompany,findcompany,delcomp,getcompanycounts,getCompanybyuser} from './../store/action/company'
import {getalluser } from './../store/action/auth'
import {useDispatch,useSelector} from 'react-redux'
import {getfile,getfileadmin,getallfilecounts,getfileuser, } from './../store/action/savefile'
// import ReactPaginate from 'react-paginate';




function Home(){
 
  const itemsPerPage = 5
  const dispatch =useDispatch()
  const  comp = useSelector(state => state.comp)
  const  auth = useSelector(state => state.auth)
  const filedata =useSelector(state =>state.filedata)


  const [keyword, setKeyword] = useState('');
  const [offset,setOffset] = useState(0)
  const [coffset,setcOffset] = useState(0)

  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [state,setState] = useState({
    rows:'',
    cols:'',
    citemOffset:Math.ceil(comp.getfilecounts / itemsPerPage),
    cpageCount:localStorage.setItem('pageCount',Math.ceil(comp.getfilecounts  / itemsPerPage)),
    itemOffset:Math.ceil(comp.getcompanycounts / itemsPerPage),
    pageCount:localStorage.setItem('pageCount',Math.ceil(comp.getcompanycounts  / itemsPerPage))
  })


const nextPage = () => {
  setSkip(skip - limit)
}

const previousPage = () => {
  setSkip(skip + limit)
}


useEffect(() => {

  dispatch(getfileadmin(skip,limit))
  
 
}, [skip,limit]);



// useEffect(() => {

//   dispatch(getfileuser(skip,limit,auth.user._id))
 
 
// }, [skip,limit]);






useEffect(() => {

  dispatch(getCompany(skip,limit))
  
 
}, [skip,limit]);



useEffect(() => {
  

  dispatch(getCompanybyuser(skip,limit,auth.user._id))
  
 
}, [skip,limit]);



 

  
   
   useEffect(()=>{
     
    dispatch(getfile(auth.user._id))
     
  },[dispatch,auth.user._id])

   useEffect(()=>{
 
    dispatch(getalluser())
    
  },[])



  useEffect(()=>{
   
    dispatch(getallfilecounts())
    
  },[])

  useEffect(()=>{
    
    dispatch(getcompanycounts())
    
  },[])

  

  // const handlePageClick1 = (event) => {
  //   //console.log("event.selected",event.selected)
  //   const newOffset = Math.ceil(event.selected * itemsPerPage);
    
  //   setOffset(newOffset)
  // //  console.log(newOffset)
  //  // dispatch(getCompany(offset))
  // };

  // const handlePageClick2 = (event) => {
  //   //console.log("event.selected",event.selected)
  //   const cnewOffset = Math.ceil(event.selected * itemsPerPage);
    
  //   setcOffset(cnewOffset)
  //   //console.log(cnewOffset)
  //  // dispatch(getCompany(offset))
  // };


  const handleSearch = (e) => {
    e.preventDefault()

    if (keyword.trim()) {
      dispatch(findcompany(keyword))
        
    } else {
      
       
    }
}



const handleDelete = (id ) => {
  dispatch(delcomp(id))
}



console.log("filedata",filedata.getfileadmin)

    return(
        <div class="container bg-light rounded-3 shadow-lg mt-5 ">
           <div>
              <header>
                  <div class="px-3 py-2">
                       <div class="align-items-center justify-content-between justify-content-lg-start">
                          <a href="/" class="d-flex align-items-center ">
                         </a>
                       
                          <ul class=" line nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                               <li >
                                   <a class="nav-link text-secondary text-decoration-none">Home</a>
                               </li>

                                <li>
                                <Link to="/"> <a class="nav-link text-secondary ">New Customer</a></Link> 
                               </li>
                               
                               <li>
                               <Link to="carry"> <a class="nav-link text-secondary">Carriers</a></Link>
                               </li>
                           </ul>
                       </div>
      
                     </div>
    
               </header>

           </div>
           <div class="container">
           <nav class="navbar navbar-light bg-light mt-2 ">
               <div class="container-fluid ">
                   <form class="d-flex   w-100">
                       <input class="form-control me-2" type="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} aria-label="Search" />
                       <button class="btn btn-primary w-25" type="submit" onClick={handleSearch} style={{backgroundColor: "#6748f0"}} >Search</button>
                        {/* <button class="btn btn-warning text-light text-decoration-none ">Create Customer</button> */}
                       <div>
                          {auth.user.role === "admin" ? 
                            <div class="dropdown p-2 ">
                                <button class="btn btn-success btn dropdown-toggle me-2 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                     Agents
                                </button>
                                   <ul class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                     {auth.getalluser.map((name,index)=>{
                                         return(
                                            <li class="dropdown-item  " key={index}>
                                                <h5> <Link type="button" to={`/savefile/${name._id}`} >
                                                        {name.firstname}
                                                    </Link></h5>
                                           </li>
                                       )
                                       }) }
                                   </ul>
                                  
                              </div>   
                            :null}
                         </div>
                       </form>
                 </div>
          </nav></div>
          
         
       
            <table class="table table-responsive table-sm ">
                <thead>
                      <tr >
                    <th >Company Name</th>
                    <th >City</th>
                    <th >State</th>
                    <th >Status</th>
                    <th >View</th>
                    {auth.user.role === "admin" && <th >Delete</th>}
                     </tr>
                  </thead>
                  <tbody>

                     {keyword  ?

               <Fragment>
                    <Fragment>
                       {(auth.user.role === "admin") && auth.user._id && comp.getallcomp && comp.getallcomp.map((comp,index) => {
                     
                       return(
                         < tr key={index}>
                          <th >{comp.companyname}</th>
                          <td >{comp.city}</td>
                          <td >{comp.state}</td>
                          <td >{comp.status}</td>
                          { (((auth.user._id) && (auth.user.role === "user")) ||  ((auth.user._id) && (auth.user.role === "admin"))  && (<td ><Link type="button" class="btn btn-primary btn-sm w-auto" to={`/view/${comp._id}/${comp.status}`}>View</Link></td>) ) }
                        {auth.user.role === "admin" && <td scope="row"> <button type="button" class="btn btn-danger w-auto" onClick={()=>handleDelete(comp._id)}>Delete</button></td>}
                      </tr>
                    )
                    })}
              </Fragment>
              <Fragment>
                       {(auth.user.role === "user") && auth.user._id && comp.getallcomp && comp.getallcomp.map((comp,index) => {
                     
                       return(
                         < tr key={index}>
                          <th >{comp.companyname}</th>
                          <td >{comp.city}</td>
                          <td >{comp.state}</td>
                          <td >{comp.status}</td>
                          { (((auth.user._id) && (auth.user.role === "user")) ||  ((auth.user._id) && (auth.user.role === "admin"))  && (<td ><Link type="button" class="btn btn-primary btn-sm w-auto" to={`/view/${comp._id}/${comp.status}`}>View</Link></td>) ) }
                        {auth.user.role === "admin" && <td scope="row"> <button type="button" class="btn btn-danger w-auto" onClick={()=>handleDelete(comp._id)}>Delete</button></td>}
                      </tr>
                    )
                    })}
              </Fragment>


                       {/* <Fragment>
{ (auth.user.role === "user") && auth.user._id &&  comp.getcompanybyuser && comp.getcompanybyuser.map((data,index) => {
 return(

   <tr key={index}>
     <th >{data.companyname}</th>
     <td >{data.city}</td>
     <td  >{data.state}</td>
     <td  >{data.status}</td>
     <td ><Link type="button" class="btn btn-primary btn-sm" to={`/view/${data._id}/${data.status}`} >View</Link></td>

   {auth.user.role === "admin" && <td scope="col"> <button type="button" class="btn btn-danger btn-sm w-auto" onClick={()=>handleDelete(data._id)}>Delete</button></td>}
  </tr>
     )

  })}




</Fragment> */}



{/* 
<Fragment>
{filedata.getfileadmin.result1.map((data,index) => {
 return(

   <tr key={index}>
     <th >{data.comp.companyname}</th>
     <td >{data.comp.city}</td>
     <td  >{data.comp.state}</td>
     <td  >{data.comp.status}</td>
     <td ><Link type="button" class="btn btn-primary btn-sm" to={`/view/${auth.user._id}/${data.comp._id}/${data.comp.companyname}`} >View</Link></td>

   {auth.user.role === "admin" && <td scope="col"> <button type="button" class="btn btn-danger btn-sm w-auto" onClick={()=>handleDelete(data.comp._id)}>Delete</button></td>}
  </tr>
     )

  })}




</Fragment> */}

</Fragment>
       
              
               :




<Fragment>




           <Fragment>
              {(auth.user.role === "user") && auth.user._id &&  comp.getcompanybyuser.map((data,index) => {
               return(
                   <tr key={index}>
                      <th >{data.companyname}</th>
                      <td >{data.city}</td>
                      <td  >{data.state}</td>
                      <td  >{data.status}</td>
                     <td ><Link type="button" class="btn btn-primary btn-sm" to={`/view/${data._id}/${data.status}`} >View</Link></td>
                     {auth.user.role === "admin" && <td scope="col"> <button type="button" class="btn btn-danger btn-sm w-auto" onClick={()=>handleDelete(data._id)}>Delete</button></td>}
                   </tr>
                 )

                 })}
            </Fragment>




               <Fragment>
               { (auth.user.role === "user") && auth.user._id  &&  (filedata.getfile.Data !== undefined)  &&  filedata.getfile   ?  filedata.getfile.Data.map((com,index) => {
                   return(
                        
                       
                         <tr key={index}>
                             <th >{com.companyname}</th>
                             <td >{com.city} </td>
                             <td >{com.state}</td>
                             <td >{com.status}</td>
                             <td ><Link type="button" class="btn btn-primary btn-sm w-auto" to={`/view/${auth.user._id}/${com._id}/${com.companyname}`} >View</Link></td>
                      
                            {auth.user.role === "admin" && <td scope="col"> <button type="button" class="btn btn-danger btn-sm  w-auto" onClick={()=>handleDelete(com._id)}>Delete</button></td>}
                       
                          </tr> 
                       
                             
                          
                   )
                  })
                  :null
               
                 }  
                </Fragment>

                <Fragment>
               {(auth.user.role === "admin" && filedata.getfileadmin.result)  ? filedata.getfileadmin.result.map((com,index) => {
                   return(
                        
                       
                         <tr key={index}>
                             <th >{com.Data.companyname}</th>
                             <td >{com.Data.city} </td>
                             <td >{com.Data.state}</td>
                             <td >{com.Data.status}</td>
                             <td ><Link type="button" class="btn btn-primary btn-sm w-auto" to={`/view/${auth.user._id}/${com.Data._id}/${com.Data.companyname}`} >View</Link></td>
                      
                            {auth.user.role === "admin" && <td scope="col"> <button type="button" class="btn btn-danger btn-sm  w-auto" onClick={()=>handleDelete(com.Data._id)}>Delete</button></td>}
                       
                          </tr> 
                       
                             
                          
                   )
                  })
                  :null
               
                 }  
                </Fragment>


                
               
              

                <Fragment >
               { auth.user.role === "admin" && comp.getallcomp && comp.getallcomp.map((com,index) => {
                
                 return(
                 
                    <tr key={index}> 
                          <th >{com.companyname}</th>
                          <td >{com.city}</td>
                          <td >{com.state}</td>
                          <td >{com.status}</td>
                         {(auth.user.role === "admin") || (com.userId === auth.user._id) ?<td ><Link type="button" class="btn btn-primary btn-sm" to={`/view/${com._id}/${com.status}`} >View</Link></td> : null}

                    
                         {auth.user.role === "admin" && <td scope="row"> <button type="button" class="btn btn-danger btn-sm w-auto fw-bold" onClick={()=>handleDelete(com._id)}>Delete</button></td>}
                    </tr>
                   )
                })}
                </Fragment>  
                </Fragment>

              }




                      

     
</tbody>
           </table>
            

         

         <div style={{display:'flex',justifyContent:'center'}}>
              <div class="btn-group m-2" role="group" aria-label="Basic example" >
                  <button type="button" class="btn btn-secondary" onClick={nextPage} >  Previous Page</button>
                  <button type="button" class="btn btn-secondary" onClick={previousPage} >Next Page</button>
             </div>
         </div>

</div>
                 
    )
}

export default Home;