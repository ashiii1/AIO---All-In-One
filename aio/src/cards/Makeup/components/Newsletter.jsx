import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import  styled  from 'styled-components'

const MainContainer=styled.div`
margin-top: 3rem;
`
const InnerContainer=styled.div`
height: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #A675A1;
color: black;
padding: 1.4rem;
`

const Button=styled.button`
height:2rem;
padding: 7px;
border: none;
background-color: white;
color:#A675A1 ;
cursor: pointer;
position: relative;
top:2.5px;
`
export default function Newsletter() {
    return (
        <MainContainer>
            <InnerContainer>
                <div><h1>Newsletter</h1></div>
                <div><p>Grab your discount and timely updates for your favourite product</p></div>
                <div >
                    <input  style={{height:"2rem",width:"18rem",padding:"5px",border:"none"}} type="text" placeholder="Your Email"/>
                    <Button><SendOutlined/></Button>
                </div>
            </InnerContainer>
        </MainContainer>
    )
}

