import axios from "axios";
import * as types from './types'











export const getfile = (id) => async (dispatch,getState) => {
 
    try {
      const result = await  axios.get(`http://localhost:4000/user/getfile/${id}`)
     console.log("getfile",result.data.Data[0])
      dispatch({ type: types.GET_FILE, payload: result.data});
     
    
    }
     catch (error) {
      console.log(error.message);
    }
    };



    export const getcompanyfiledetails = (id,userId)=> async (dispatch) =>{
      try{
         
          const result = await axios.get(`http://localhost:4000/user/getcompanyfiledetails/${userId}/${id}`)
        
          console.log("getcompanyfiledetails" ,result.data.Data[0])
          dispatch({type:types.GET_COMPANY_FILE_DETAIL,payload:result.data.Data[0]})
       }
       catch(error){
           console.log(error)
   
   
       }
  }


  export const fileedit = (companyupdate)=> async (dispatch) =>{
    try{
       
        const result = await axios.put(`http://localhost:4000/user/fileedit/${companyupdate.id}/${companyupdate.userId}`,companyupdate)
        
        dispatch({type:types.FILE_EDIT,payload:result.data.getdetail})
     }
     catch(error){
         console.log(error)
 
 
     }
}



    export const getfileadmin = (skip,limit) => async (dispatch,getState) => {
    
        try {
          const result = await  axios.get(`http://localhost:4000/user/getfileadmin`)
          console.log("result getfileadmin" , result.data)
          dispatch({ type: types.GET_FILE_ADMIN, payload: result.data });
         
        
        }
         catch (error) {
          console.log(error.message);
        }
        };


        // export const getfileuser = (skip,limit,userId) => async (dispatch,getState) => {
         
        //     try {
        //       const result = await  axios.get(`http://localhost:4000/user/getfileuser/${skip}/${limit}/${userId}`)
              
        //       dispatch({ type: types.GET_FILE_USER, payload: result.data });
             
            
        //     }
        //      catch (error) {
        //       console.log(error.message);
        //     }
        //     };

        export const getallfilecounts = () => async (dispatch,getState) => {
          //console.log(id)
            try {
              const result = await  axios.get('http://localhost:4000/user/getallfilecounts')
           
              dispatch({ type: types.GET_FILE_COUNTS, payload: result.data });
             
            
            }
             catch (error) {
              console.log(error.message);
            }
            };

           
           