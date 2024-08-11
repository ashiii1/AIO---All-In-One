import React from 'react'
import { useHistory } from 'react-router'
 import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { small,medium } from '../responsive'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const NavContainer=styled.div`
background-color: #25283D;
color: white;
`

const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
height: 60px;
${medium({height:"50px",padding:" 10px 0"})}
`

const Left =styled.div`
font-family: 'Cookie', cursive;
cursor: pointer;
font-size: 3rem;
flex: 1;
text-decoration: none ;
color:white;

${medium({fontSize:"2rem",marginRight:"0",flex:"0"})}
${small({fontSize:"1.4rem"})}
`

const Right=styled.div`
flex:1;
display: flex;
gap: 0.8rem;
justify-content: end;
${medium({flex:"0",marginRight:"0.65rem"})}
${small({fontSize:"0.6rem !important" ,gap:"0.2rem"})}
`
const Item=styled.div`
/* cursor:pointer; */
margin-top:10px;

& > *{
cursor: pointer;
font-size: 1.12rem;
${small({fontSize:"0.6rem !important" })}
${medium({fontSize:"1rem !important" })}
}

`
export default function AdminNav() {
const dispatch=useDispatch()
const user=useSelector(state=>state.user)
const history=useHistory()
    return (
        <NavContainer>
             <Wrapper>
             <Link to="/adminHome" style={{textDecoration:"none"}}>
                 <Left>
                     <p style={{textDecoration:"none"}}>MakeYouUp</p>
                 </Left>
                 </Link>
                
                 <Right>
                 {
                        user.currentUser &&
                        <>
                        <Item><p style={{width:"5.5rem"}}>Hi, {user.currentUser.username}</p></Item>
                        </>
                    }
                    
                    {!user.currentUser &&
                    <>
                   <Link to="/login" style={{textDecoration:"none",color:"inherit"}}> <Item> <p>LogIn</p></Item></Link>
                   <Link to="/register" style={{textDecoration:"none",color:"inherit"}}> <Item> <p>Register</p></Item></Link>
                    </>
                    }
                    
                    <Link to="/adminProductList" style={{color:"inherit",textDecoration:"none"}}> <Item><p>Products</p></Item></Link>
                    <Link to="/adminUserList" style={{color:"inherit",textDecoration:"none"}}><Item><p>Users</p></Item></Link>
                   
                    {
                        user.currentUser &&
                        <>
                        <Item><p onClick={()=>{
                            dispatch({type:"logOut"})
                            history.push("/")
                            }}>LogOut</p></Item>
                        </>
                    }
                    
                 </Right>
             </Wrapper>
        </NavContainer>
    )
}