import * as types from './../action/types'




const initialState = {
   isRegistered:false,
   getallcomp:[],
   getcompany:{},
   registeredcompany:{},
  getcompanycounts:0,
  itemsPerPage:4,
 // getcompanyfiledetail:{},
  getcompanies:[],
  getcompanybyuser:[
      
  ]
 
}

export default (state=initialState,action)=>{
    switch(action.type){
        

                case types.REGISTER_COMPANY:
                    return{
                    ...state,
                    isRegistered:true,registeredcompany:action.payload
                }
                case types.GET_COMPANY:
                    return{
                    ...state,
                    getallcomp:action.payload,
                }

                case types.GET_COMPANIES:
                    return{
                    ...state,
                    getcompanies:action.payload,
                }
                case types.GET_COMPANY_DETAIL:
                    return{
                    ...state,
                    getcompany:action.payload,
                }
                case types.GET_COMPANY:
                    return{
                    ...state,
                    getallcompany:action.payload,
                }
                case types.GET_COMPANY_COUNTS:
                     return{
                    ...state,
                    getcompanycounts:action.payload,
                }

            //     case types.GET_COMPANY_FILE_DETAIL:
            //         return{
            //        ...state,
            //        getcompanyfiledetail:action.payload, 
            //    }
               
               case types.GET_COMPANY_BY_USER:
                return{
               ...state,
               getcompanybyuser:action.payload, 
           }
                            

            default:
                return state;
    }

}