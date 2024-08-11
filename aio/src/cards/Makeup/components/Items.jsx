import React from 'react'
import styled from 'styled-components'
import lipstick1 from "../assets/Items/lipstick1.jpg"
import foundation from "../assets/Items/foundation.jpg"
import mascara from "../assets/Items/mascara.jpg"
import eyeliner from "../assets/Items/eyeliner.png"
import bronzer from "../assets/Items/bronzer.jpg"
import blush from "../assets/Items/blush.jpg"
import { productsData } from '../data'
import { medium } from '../responsive'
import { Link } from 'react-router-dom'

const ItemContainer=styled.div`
margin-top: 3rem ;
`
const ItemTitle=styled.h3`
text-align: center;
font-size: 1.5rem;
font-weight: 550;
letter-spacing: 2.5px;
margin-top: -5px;
`
const OuterContainer=styled.div`
    margin: 2rem 10rem;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    ${medium({margin:"2rem 0"})}
`

const HideCard=styled.div`
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5);
width: 100%;
height: 100%;
color: white;
display: none;

`

const InnerContainer=styled.div`
background-color: red;
height: 25rem;
width: 20rem;
overflow: hidden;
position: relative;
transition: all 0.4s linear;

&:hover{
    box-shadow: 1px 1px 5px 5px #141314 ;
}

&:hover ${HideCard}{
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
transition: all 1s linear;

}
`

const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;

`

const Button=styled.button`
padding: 15px;
border: none;
background-color: black;
color: white;
cursor: pointer;
font-size: 1.2rem;
`

export default function Items() {
    let i=-1;
    let itemArray=[lipstick1,foundation,mascara,eyeliner,bronzer,blush]
    return (
        <div>
            <ItemContainer>
                <hr/>
                <ItemTitle>Featured Products</ItemTitle>
                <OuterContainer>
                    {productsData.map(item =>{
                        i++;
                        return(
                    <InnerContainer>
                        <Image  src={itemArray[i]}/>
                        <HideCard>
                            <div><h2>{item.productName}</h2></div>
                            <div><Link to={`/products/product_type/${item.productName.toLocaleLowerCase()}`}><Button>Shop Now</Button></Link></div>
                        </HideCard>
                    </InnerContainer>)
                    })}
                </OuterContainer>
            </ItemContainer>
        </div>
    )
}
