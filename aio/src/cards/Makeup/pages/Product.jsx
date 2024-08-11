import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import UpperAnnouncement from '../components/UpperAnnouncement'
import Navbar from '../components/Navbar'
import LowerAnnouncement from '../components/LowerAnnouncement'
import StarRatings from 'react-star-ratings';
import { shades } from '../data'
import { Add, Remove } from '@material-ui/icons'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { medium,large } from '../responsive'
import { useParams } from 'react-router'
import { publicRequest } from '../axiosMethods'
import { useDispatch } from 'react-redux'
import {  Toast, ToastContainer } from 'react-bootstrap'
import Loader from "react-loader-spinner";

const Maincontainer=styled.div`
background-color:whitesmoke;
`
const Container=styled.div`
margin: 2rem 8rem;
display: flex;
gap: 2rem;
justify-content: center;
${large({margin:"2rem 1rem"})}
${medium({flexDirection:"column"})}
`
const ImageContainer=styled.div`
padding: 10px;
background-color: white;

`
const DetailContainer=styled.div`
padding: 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
gap: 1px;
`
const ProductName=styled.div`
`
const ProductBrand=styled.div`
`
const ProductPrice=styled.div`
`
const ProductDesc=styled.div`
`
const ShadesContainer=styled.div`
`
const Shades=styled.div`
display: flex;
gap: 0.5rem;
flex-wrap: wrap;
`
const ShadeSingle=styled.div`
height: 1.5rem;
width: 1.5rem;
background-color: ${props=>props.hexValue};
border-radius: 50%;
border: 1px solid black;
cursor: pointer;
padding: 2px;
transform: ${props=> props.shade === props.hexValue ?"scale(1.3)":" "};
border-radius: ${props=> props.shade === props.hexValue ?"10%":" "};
`
const CartContainer=styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
`

const QuantityContainer=styled.div`
padding: 4px;
border: 1px solid black;
margin: 1.5rem 0;
`

const Button=styled.button`
border: none;
background-color: white;
margin: 5px;
cursor: pointer;
`
const AddToCartContainer=styled.div`
margin:  1.5rem 0;
`

const CartButton=styled.button`
    background-color: black;
    padding: 8px;
    color: white;
    border: none;
    cursor: pointer;
    height: 100%;
    `
export default function Product() {
    let [product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    let [shadeIn,setShade]=React.useState("")
    let [quantity,setQuantity]=React.useState(1)
    const id=useParams().productId
    const dispatch=useDispatch()
    const [alert,setAlert]=useState(false)
    const [error,setError]=useState(false)
    // console.log(param)

 const getProduct=async(id)=>{

    try{
        let res=await publicRequest.get(`/product/find/${id}`)
        setProduct(res.data)
        console.log(res.data)
        setLoading(false)
    }
    catch(err)
    {
        console.log(err)
    }

 }


    useEffect(()=>{

        getProduct(id)

    },[id])

    const handleShade=(value)=>{
        setShade(value)
    }

    const handleQuantity=(value)=>{

        if(value ==="inc")
        {
            setQuantity(quantity+1)
        }
        else{
            if(quantity >1) 
            setQuantity(quantity-1)
        }

    }

    const handleCart=()=>{
        
        console.log(product)
        let product_colors=shadeIn
        let cartProduct={...product,quantity,product_colors}
        console.log(cartProduct)
        if(product.product_colors.length>0)
        {
           if( cartProduct.product_colors.length>0)
           {
            setAlert(true)
            dispatch({type:"addProduct",payload:cartProduct})
            setError(false)   
           }
           else{
               setError(true)
           }
        }
        else{
            setAlert(true)
         dispatch({type:"addProduct",payload:cartProduct})
         setError(false)
        }
    }
    return (
       <>
       {
            alert &&
            <ToastContainer position="bottom-end">
            <Toast bg={"success"} style={{width:"15rem" ,height:"3rem",padding:"5px"}} onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
                Your item is added to cart
            </Toast>
            </ToastContainer>
        }
        <Maincontainer>
             
             <UpperAnnouncement/>
            <Navbar/>
            <LowerAnnouncement/>
            <Container>
            {loading ?  
                    <div className="d-flex justify-content-center m-5">
                    <Loader
                        type="TailSpin"
                        color="#25283D"
                        height={100}
                        width={100}
                        
                    />
                    </div>
                  :  
                  <>
                <ImageContainer>
                    <img src={product.image_link} alt="product" style={{objectFit:"contain"}}  width="350px" height="500px"/>
                </ImageContainer>
                <DetailContainer>
                    <ProductName><h2>{product.name}</h2></ProductName>
                    <ProductBrand><p>{product.brand}</p></ProductBrand>
                    <ProductPrice><h2>{product.price} $</h2></ProductPrice>
                    <StarRatings
                    rating={product.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="2px"
                     />
                    <ProductDesc><p style={{color:"grey"}}>{product.description}</p>
                    </ProductDesc>
                    { shades.length>1 &&
                    <ShadesContainer>
                        { product.product_colors && product.product_colors.length>0 ?
                        <>
                        <h5>Choose Shades</h5>
                       <Shades> 
                       {product.product_colors.map((shade)=>{
                            return(
                           <ShadeSingle hexValue={shade.hex_value}  shade={shadeIn} onClick={()=>{handleShade(shade.hex_value)}}></ShadeSingle> )
                        })}   
                           </Shades>  
                           {error &&
                           <p style={{color:"red",marginTop:"5px"}}>Please choose one</p>
                            }
                         </>:
                         <></> 
                        } 
                    </ShadesContainer>
                    }
                    <CartContainer>
                        <QuantityContainer>
                            <Button onClick={()=>{handleQuantity("dec")}}><Remove/></Button>
                            <h3 style={{display:"inline-block"}}>{quantity}</h3>
                            <Button onClick={()=>{handleQuantity("inc")}}><Add/></Button>                            
                        </QuantityContainer>
                        <AddToCartContainer>
                            <CartButton onClick={handleCart}>
                                Add To Cart
                            </CartButton>
                        </AddToCartContainer>
                    </CartContainer>   
                </DetailContainer>
                </>
                }
            </Container>
            <Newsletter/>
            <Footer/>
        </Maincontainer>
        </>
    )
}
