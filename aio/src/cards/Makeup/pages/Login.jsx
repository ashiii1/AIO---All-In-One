
import React,{useState} from 'react'
import styled from 'styled-components';
import background from "../assets/login/login.jfif"
import * as YUP from "yup"
import {Formik,Form,Field,ErrorMessage} from "formik"
import { large } from '../responsive';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Loader from "react-loader-spinner";

const Container=styled.div`
background-image:url(${background});
height: 100vh;
width: 100vw;
object-fit: cover; 
background-position: 55% 30%;
${large({display:"flex",justifyContent:"center",alignItems:"center"})}
`
const OuterContainer=styled.div`
height: 25rem;
width: 25rem;
background-color: transparent;
position: relative;
top: 23%;
left: 55%;
box-sizing:border-box;
${large({position:"relative",top:"0",left:"0"})}
`
const Brand=styled.div`
text-align: center;
font-size: 2rem;
`
const FormContainer=styled.div`
background-color: white;
padding: 14px;
margin-top: 1rem;
`
const Input=styled(Field)`
height: 2rem;
margin:1rem 0;
`
const Forget=styled.div`
text-align: end;
`

const Para=styled.p`
cursor: pointer;
display: inline-block;
color: #e46acf;
`

const Button=styled.button`
border: none;
background-color: black;
color: white;
padding: 8px;
margin-bottom: 1rem;
width: 12rem;
`
const Error=styled.div`
color: red;
font-size: 0.8rem;
margin: 0;
`

const Invalid=styled.div`
color: red;
font-size: 1rem;
margin-bottom: 0.5rem;
`
export default function Login() {
    const history=useHistory()
    const user=useSelector(state=>state.user)
    const [loading,setLoading]=useState(false)
    if(user.currentUser)
    { 
         console.log(user.currentUser.isAdmin)
        if(user.currentUser.isAdmin) history.push("/adminHome")
        else history.push("/")
    }
    const dispatch=useDispatch()
   
        const {error}=useSelector(state=>state.user)

    const signInSchema=YUP.object().shape({
        email:YUP.string().required("Please Enter Email").email(),
        password:YUP.string().required("Please Enter Password")
    })
    
    
    return (
        <Container>
            <OuterContainer>
                <Brand>
                MakeYouUp
                </Brand>
                <FormContainer>
                    <div style={{textAlign:"center",fontSize:"1.5rem"}}>Sign In</div>
                    <hr/>
                    <Formik
                        initialValues={
                            {
                                email:"",
                                password:""
                            }
                        }
                        validationSchema={signInSchema}
                        onSubmit={( values ,{resetForm})=>{
                            setLoading(true)
                            console.log(values)                           
                            login(dispatch,values)
                            resetForm()
                            setLoading(false)
                            // console.log(user.currentUser.isAdmin)
                            // // if(user.currentUser.isAdmin) 
                            // history.push("/adminHome")
                            // // else history.push("/")
                            
                        }}>
                        {()=>{
                            return (
                            <Form>
                            <div className="form-group">
                            <Input type="text" placeholder="Email" className="form-control" id="email" name="email"/>
                            <Error><ErrorMessage name="email"/></Error>
                            </div>
                            <div className="form-group">
                            <Input type="text" placeholder="Password" className="form-control" id="password" name="password" />
                            <Error><ErrorMessage name="password"/></Error>
                            </div>
                            <Forget className="text-end">
                            <Link to="/forget" style={{textDecoration:"none",color:"inherit"}}>  <Para>forget Password?</Para></Link>
                            </Forget>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                { loading && 
                                <>
                                <Loader
                                type="Bars"
                                color="#adb4ec"
                                height={30}
                                width={30}                               
                               />
                                </>}
                            </div>
                            <div className="text-center">
                                { error &&
                                    <Invalid>Invalid UserName/Password</Invalid>
                                }
                                <Button type="submit">Log In</Button>
                            </div>
                            
                            <div className="text-center">
                            <Link to="/register" style={{textDecoration:"none",color:"inherit"}}> <Para>New Here? Create Account</Para></Link>
                            </div>
                            <div style={{lineHeight:"3px" ,color:"grey"}}>
                                <p>For Testing ,Please Use below credentials</p>
                                <p><b>User</b>: test@gmail.com <b>Password</b>:test123</p>
                                <p><b>Admin</b>: admin@gmail.com <b>Password</b>:admin123</p>
                            </div>
                        </Form>
                            )
                        }}
                    </Formik>
                </FormContainer>
            </OuterContainer>
        </Container>
    )
}
