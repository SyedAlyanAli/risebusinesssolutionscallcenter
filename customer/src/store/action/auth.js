import axios from "axios";
import * as types from './types'

import setAuthToken from "./../../utils/setAuthToken"
import history from "../../history";

export const signup = (user) => async  (dispatch) =>{
    try{
       const result = await axios.post("http://localhost:4000/user/register",user)
        console.log(result)
       console.log(result.status=== "200")
      
       dispatch({type:types.REGISTER,payload:result})
    }
    catch(error){
        console.log(error)


    }
}




export const loginform = (user) => async  (dispatch) =>{
    try{
       const result = await axios.post("http://localhost:4000/user/login",user)
        
       console.log(result)
       if(result.data.token){
       localStorage.setItem("token",result.data.token)
       
     localStorage.setItem("user", JSON.stringify(result.data.user))
     setAuthToken(result.data.token)
       dispatch({type:types.LOGIN,payload:result.data.user})
       history.push('/home')
       }
       else{
        history.push('/login')
       }
    }
    catch(error){
        console.log(error)


    }
}








    export const logoutUser = () =>  (dispatch,getState) => {
  
        try {
          localStorage.clear();
          setAuthToken(false)
          dispatch({ type: types.LOGOUT_USER, payload: '' });
          history.push('/login')
        
        }
         catch (error) {
          console.log(error.message);
        }
        };


        export const getalluser = () => async (dispatch,getState) => {
  
          try {
            const result = await  axios.get("http://localhost:4000/user/getalluser")
            
            dispatch({ type: types.GET_ALL_USER, payload: result.data });
           
          
          }
           catch (error) {
            console.log(error.message);
          }
          };