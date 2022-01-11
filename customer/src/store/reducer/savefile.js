import * as type from "./../action/types"





const initialState = {
    getfile:[],
    getfileadmin:[],
    getfilecounts:0,
    getfileuser:[],
    getcompanyfiledetail:{},
    fileedited:{}
 }


export default (state=initialState,action)=>{
    switch(action.type){
        

           
                case type.GET_FILE:
                return{
                    ...state,
                    getfile:action.payload,
                }
                case type.GET_FILE_ADMIN:
                return{
                    ...state,
                    getfileadmin:action.payload,
                }
                case type.GET_FILE_USER:
                    return{
                        ...state,
                        getfileuser:action.payload,
                    }
                case type.GET_FILE_COUNTS:
                return{
                    ...state,
                    getfilecounts:action.payload,
                }

                case type.GET_COMPANY_FILE_DETAIL:
                    return{
                   ...state,
                   getcompanyfiledetail:action.payload, 
               }
               case type.FILE_EDIT:
                    return{
                   ...state,
                   fileedited:action.payload, 
               }
                
                

            default:
                return state;
    }

}