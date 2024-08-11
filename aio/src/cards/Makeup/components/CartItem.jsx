import React from 'react'
import styled from 'styled-components'
import {small, medium } from '../responsive'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const OuterContainer=styled.div`
display: flex;
flex-direction: column;
gap:1rem;
background-color: whitesmoke;
`

const CartContainer=styled.div`
display: flex;
width: 100%;
gap: 4rem;
padding: 10px;
background-color: white;

${medium({gap:"2rem"})}
${small({flexDirection:"column"})}
`

const ImageContainer=styled.div`
width: 100px;
height: 150px;
`
const DetailsContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`
const ShadeSingle=styled.div`
height: 1.5rem;
width: 1.5rem;
background-color: ${props=>props.hexValue};
border-radius: 50%;
border: 1px solid black;
cursor: pointer;
/* transform: ${props=> props.shade === props.hexValue ?"scale(1.3)":" "}; */
`

const QuantityContainer=styled.div`
margin-left: auto;

min-width: 11rem;
display: flex;
flex-direction: column;
padding: 10px;
justify-content: space-around;
${small({marginLeft:"0"})}
`
// const CartButton=styled.button`
// border: none;
// background-color: white;
// cursor: pointer;
// margin-right: 1rem;
// margin-left: 1rem;
// `
const Button=styled.button`
border: none;
background-color: black;
color: white;
padding: 5px;
`
export default function CartItem() {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart)
    return (
        <OuterContainer>
        {cart.products.map((product)=>{
    
               return(<>
        <CartContainer>
            <ImageContainer>
                    <img src={product.image_link} width="150rem" alt="product" style={{objectFit:"cover"}} />
                </ImageContainer>
                <DetailsContainer>
                    <div><h2>{product.name}</h2></div>
                    <div><p>{product.brand}</p></div>
                    {product.product_colors &&
                    <div>color
                        <ShadeSingle hexValue={product.product_colors}></ShadeSingle>
                    </div>
                    }
                </DetailsContainer>
                <QuantityContainer>
                   
                    <div>
                        <h4 style={{display:"inline-block"}}>Quantity:</h4>
                        <h4 style={{display:"inline-block"}}>{product.quantity}</h4>

                    </div>
                    <div>
                        <h3 style={{marginLeft:"3.5rem",fontSize:"1.5rem"}}>{product.quantity*product.price} $</h3>
                    </div>
                    <div className="mx-auto">
                        <Button onClick={()=>{dispatch({type:"removeItem",itemNo:cart.products.indexOf(product),product:product} )}}>Remove</Button>
                    </div>
                </QuantityContainer>
                
        </CartContainer>
        </>)
                })} 
        </OuterContainer>
    )
}
