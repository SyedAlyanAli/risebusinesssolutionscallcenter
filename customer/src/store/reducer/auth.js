import * as type from "./../action/types"



const initialState = {
    registered:false,
    user:{},
    isAuthenticated:false,
    login:false,
    getalluser:[]
    
    
}

export default (state=initialState,action)=>{
    switch(action.type){
        case type.REGISTER:
            return{
                ...state,
                registered:true,user:action.payload

            }

            case type.LOGIN:
                return{
                    ...state,
                    login:true,user:action.payload,isAuthenticated:true
    
                }

                case type.LOGOUT_USER:
                    return {
                      ...state,
                      user:null,isAuthenticated:false
                    }

                    case type.GET_ALL_USER:
                    return {
                      ...state,
                      getalluser:action.payload
                    } 



            default:
                return state;
    }

}