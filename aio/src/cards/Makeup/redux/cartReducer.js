
let initialState={ 
    products:[],
    quantity:0,
    total:0
}


export const cartReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "addProduct":
            {
                console.log(action.payload,state)
                state.products.push(action.payload)
                return{
                    ...state,
                    quantity:state.quantity+1,                 
                    total: (state.total+(action.payload.price*action.payload.quantity))
                }
            }

            case "emptyCart":
                {
                    return{
                        ...state,
                        products:[],
                        quantity:0,
                        total:0
                    }
                }
                case "removeItem":
                {
                    let tempProd=[...state.products]
                    tempProd.splice(action.itemNo,1)
                    console.log(tempProd)
                    console.log(action.product)
                    return {
                        state,
                        products:[...tempProd],
                        quantity:state.quantity-1,
                        total: (state.total-(action.product.price*action.product.quantity))

                    }
                }
            default: return state
    }
}