import React from 'react'
import styled,{keyframes} from 'styled-components'

const colorChange=keyframes`
 0%   {background-color: #A675A1;}
    50%  {background-color: #8F3985;}
    100% {background-color: #A675A1;}
`

const Container=styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
animation: ${colorChange} 4s infinite linear;
color: white;
`


export default function UpperAnnouncement() {
    return (
        <Container>
           <div style={{marginTop:"10px"}}> <p>DIWALI SALE!!! upto 50% OFF</p></div>
        </Container>
    )
}
