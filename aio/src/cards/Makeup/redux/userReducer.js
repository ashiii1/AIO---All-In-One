 
let initialState={ 
    currentUser:null,
    isFetching:false,
    error:false
}


export const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "loginStart":
            {
             return{
                    ...state,
                    isFetching:true
                }
            }
            case "loginSuccess":
            {
             return{
                    ...state,
                    isFetching:false,
                    currentUser:action.payload,
                    error:false
                }
            }
            case "loginFailure":
            {
             return{
                    ...state,
                    isFetching:false,
                    currentUser:null,
                    error:true
                }
            }
            case "logOut":
            {console.log("in logout")
             return{
                    ...state,
                    isFetching:false,
                    currentUser:null,
                    error:false
                }
            }
            default: return state
    }
}