
import axios from "axios";
import * as types from './types'
import toastr from "toastr";



export const addData = (compinfo) => async  (dispatch) =>{

    try{
       const result = await axios.post("http://localhost:4000/user/registercompany",compinfo)
       
       toastr.info('Successfully Add Company')
       dispatch({type:types.REGISTER_COMPANY,payload:result})
    }
    catch(error){
        console.log(error)


    }
}


export const getCompanies =  () => async (dispatch) => {
    try{
       const result  = await axios.get(`http://localhost:4000/user/getcompany`)
     
       dispatch({type:types.GET_COMPANIES,payload:result.data})
    }
    catch(error){
        console.log(error)
    }
}

export const getCompany =  (skip,limit) => async (dispatch) => {
    try{
       const result  = await axios.get(`http://localhost:4000/user/getcompany/${skip}/${limit}`)
  
       dispatch({type:types.GET_COMPANY,payload:result.data})
    }
    catch(error){
        console.log(error)
    }
}


export const getCompanybyuser = (skip,limit,userId)=> async (dispatch) =>{
    try{
        
        const result = await axios.get(`http://localhost:4000/user/getcompanybyuser/${skip}/${limit}/${userId}`)
 
       
        dispatch({type:types.GET_COMPANY_BY_USER,payload:result.data})
     }
     catch(error){
         console.log(error)
 
 
     }
}



export const getcompanydetails = (id)=> async (dispatch) =>{
    try{
       
        const result = await axios.get(`http://localhost:4000/user/getcompanydetails/${id}`)
        
     
        dispatch({type:types.GET_COMPANY_DETAIL,payload:result.data.getdetail})
     }
     catch(error){
         console.log(error)
 
 
     }
}



export const getcompanyfiledetails = (id,userId)=> async (dispatch) =>{
    try{
       
        const result = await axios.get(`http://localhost:4000/user/getcompanyfiledetails/${userId}/${id}`)
       console.log("getcompanyfiledetails",result)
       
        dispatch({type:types.GET_COMPANY_FILE_DETAIL,payload:result.data[0].Data[0]})
     }
     catch(error){
         console.log(error)
 
 
     }
}

export const companyedit = (companyupdate)=> async (dispatch) =>{
    try{
       
        const result = await axios.put(`http://localhost:4000/user/companyedit/${companyupdate.id}`,companyupdate)
        
        dispatch({type:types.COMPANY_EDIT,payload:result.data.getdetail})
     }
     catch(error){
         console.log(error)
 
 
     }
}


export const findcompany = (keyword)=> async (dispatch) =>{
    try{
       
        const result = await axios.get(`http://localhost:4000/user/findcompany?keyword=${keyword}`)
        
        
        dispatch({type:types.GET_COMPANY,payload:result.data.searchdata})
     }
     catch(error){
         console.log(error)
 
 
     }
}

export const delcomp = (id)=> async (dispatch) =>{
    try{
       
        const result = await axios.delete(`http://localhost:4000/user/delcomp/${id}`)
        
       
        dispatch({type:types.DEL_COMPANY,payload:result.data.searchdata})
     }
     catch(error){
         console.log(error)
 
 
     }
}


export const getcompanycounts = () => async (dispatch,getState) => {
   
      try {
        const result = await  axios.get('http://localhost:4000/user/getcompanycounts')
        
        dispatch({ type: types.GET_COMPANY_COUNTS, payload: result.data });
       
      
      }
       catch (error) {
        console.log(error.message);
      }
      };