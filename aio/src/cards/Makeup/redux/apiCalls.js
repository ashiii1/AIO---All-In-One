import { publicRequest } from "../axiosMethods"


export const login =async (dispatch,user)=>{
    dispatch({type:"loginStart"})

    try{

        const res= await publicRequest.post("/auth/login",user)
        dispatch({type:"loginSuccess",payload:res.data})
        console.log(res.data)
    }
    catch(err)
    {
        dispatch({type:"loginFailure"})
    }
}