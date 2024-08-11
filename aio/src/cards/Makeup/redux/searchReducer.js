let initialState={
    searchValue:""
}

export const searchReducer=(state=initialState,action)=>{

switch(action.type)
{
    case "addValue":{
        console.log(state.searchValue,action.value)
        state.searchValue=action.value
        console.log(state.searchValue,action.value)
            return state
    }
    default:return state
}

}