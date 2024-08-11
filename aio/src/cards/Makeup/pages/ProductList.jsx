/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState,useEffect} from 'react'
import  styled from 'styled-components'
import LowerAnnouncement from '../components/LowerAnnouncement'
import Navbar from '../components/Navbar'
// import PriceSlider from '../components/PriceSlider'
import Slider from '../components/Slider'
import UpperAnnouncement from '../components/UpperAnnouncement'
import "./ProductList.css"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { large } from '../responsive'
// import "./PriceSlider.css"
import MultiRangeSlider from "multi-range-slider-react";
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

const Maincontainer=styled.div`
background-color:whitesmoke;
`
const OuterContainer=styled.div`
margin: 2rem 8rem;
display: flex;
${large({margin:"2rem 0"})}
`
const FilterContainer=styled.div`
width: 20rem;
min-width: 10rem;
padding: 15px;

position: sticky;
align-self: flex-start ;
top: 0;
height: 100vh;
overflow-y: auto;
`

const SortBy=styled.div`
background-color:white;
height: 5rem;
display: flex;
flex-wrap: wrap;
align-items: center;
padding: 10px;
`
const BrandContainer=styled.div`
padding: 10px;
background-color: white;
display: flex;
flex-direction: column;
gap: 1rem;
font-size: 0.9rem;
`

const CheckboxContainer=styled.div`
display: flex;
justify-content: space-between;
gap: 0.7rem;
`
const ProductsContainer=styled.div`
width: 100%;
`
export default function ProductList() {

const search=useSelector(state=>state.search)
 //initial filter   
const [filter,setFilter]=useState(
    {
        brand:[],
        product_type:[],
        price:"",
        sort:"",
        name:""
    }
)
//initial brand check box values
const [brand,setBrand]= useState(
    {
        nyx:false,
        clinique:false,
        maybelline:false,
        covergirl:false,
        loreal:false,
        colourpop:false
    }
) 
//initaial product type checkbox values
const [product_type,setProductType]=useState(
    {
        lipstick:false,
        foundation:false,
        mascara:false,
        eyeliner:false,
        bronzer:false,
        blush:false


    }
)
//for slider values
const [minValue, set_minValue] = useState(10);
const [maxValue, set_maxValue] = useState(20);
let tempMin,tempMax;
//initial sort
const [sort,setSort]=useState("")
let tempSort="";
const handleFilter=(type)=>{

    if(type === "brand" )
    {
        let trueItems=[]
        for (let key in brand)
        {
            console.log(key,brand[key])
            if(brand[key]) trueItems.push(key)
        }
        // console.log(trueItems)
        setFilter({...filter,brand:trueItems})
        // console.log(filter)
    }
    else if(type === "product_type")
    {
        console.log("in product type")
        let trueItems=[]
        for (let key in product_type)
        {
             console.log(key,product_type[key])
            if(product_type[key]) trueItems.push(key)
        }
         console.log(trueItems)
        setFilter({...filter,product_type:trueItems})
         console.log(filter)
    }
    else if(type==="sort")
    {
        console.log(tempSort)
        setFilter({...filter,sort:tempSort})
        console.log(filter)
    }
    else if (type === "price")
    {
        let price=`${tempMin},${tempMax}`
        // console.log(price)
        setFilter({...filter,price:price})
        // console.log(filter)
    }
    else if(type === "name")
    {
        setFilter({...filter,name:search.searchValue})
    }
}
const handleBrand=({target:{name,checked}})=>{

    // console.log(name,checked)
    brand[name]=checked
    setBrand({...brand})
    // console.log(brand)

    handleFilter("brand")
}
const handleProductType=({target:{name,checked}})=>{

    // console.log(name,checked)
    product_type[name]=checked
    setProductType({...product_type})
    // console.log(product_type)

    handleFilter("product_type")
}
const handleSort=({target:{value}})=>{
    console.log("in",value)
    setSort(value)
    tempSort=value
    handleFilter("sort")
}



const handleInput = (e) => {
	set_minValue(e.minValue);
    tempMin=e.minValue
	set_maxValue(e.maxValue);
    tempMax=e.maxValue
    handleFilter("price")
};

const location=useLocation();

useEffect(()=>{
    
    const temp=location.pathname.split("/")
    if( temp[2] === "brand" ||temp[2] === "product_type")
    {
        console.log("in")
    let event={
        target:{
            name:temp[3],
            checked:true
                }
               }
               console.log(temp[2])
                temp[2]==="brand"?handleBrand(event):handleProductType(event)
    }
    else if(temp[2] && temp[2]=== "name")
    {
        console.log("in",temp[2])
        handleFilter("name")
    }
    else{
        setFilter({...filter,name:""})
    }
},[location])

    return (
        <Maincontainer>
            <UpperAnnouncement/>
            <Navbar/>
            <LowerAnnouncement/>
            <Slider/>
            <OuterContainer>
                <FilterContainer>
                      <SortBy>
                          <label htmlFor="sort"><p><b>SORT BY </b></p></label>
                          <select style={{marginLeft:"auto",height:"2rem",maxWidth:"8rem",fontSize:"1rem"}} onChange={(event)=>{handleSort(event)}}>
                          <option disabled selected> Price Range</option>
                          <option value="low" >Lowest Price</option>
                          <option value="high">Highest Price</option>
                          </select>
                      </SortBy>
                      <div style={{margin:"1rem 0"}}><b>Filters</b></div>
                      <BrandContainer>
                      <p><b>Brands</b></p>
                      <CheckboxContainer>
                      <div><label >Nyx</label></div>
                      <div><input type="checkbox"  name="nyx" value="nyx" checked={brand.nyx} onChange={(event)=>{handleBrand(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Clinique</label></div>
                      <div><input type="checkbox"  name="clinique" value="clinique" checked={brand.clinique} onChange={(event)=>{handleBrand(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Maybelline</label></div>
                      <div><input type="checkbox"  name="maybelline" value="maybellibne" checked={brand.maybelline} onChange={(event)=>{handleBrand(event)}} /></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Covergirl</label></div>
                      <div><input type="checkbox"  name="covergirl" value="covergirl" checked={brand.covergirl} onChange={(event)=>{handleBrand(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >L`oreal</label></div>
                      <div><input type="checkbox"  name="loreal" value="loreal" checked={brand.loreal} onChange={(event)=>{handleBrand(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Colourpop</label></div>
                      <div><input type="checkbox"  name="colourpop" value="colourpop" checked={brand.colourpop} onChange={(event)=>{handleBrand(event)}}/></div>
                      </CheckboxContainer>
                      </BrandContainer>
                      
                      <BrandContainer style={{margin:"1.5rem 0"}}>
                      <p><b>Items</b></p>
                      <CheckboxContainer>
                      <div><label >Lipstick</label></div>
                      <div><input type="checkbox"  name="lipstick" value="lipstick" checked={product_type.lipstick} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Foundation</label></div>
                      <div><input type="checkbox"  name="foundation" value="foundation" checked={product_type.foundation} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Mascara</label></div>
                      <div><input type="checkbox"  name="mascara" value="mascara" checked={product_type.mascara} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Eyeliner</label></div>
                      <div><input type="checkbox"  name="eyeliner" value="eyeliner" checked={product_type.eyeliner} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Bronzer</label></div>
                      <div><input type="checkbox"  name="bronzer" value="bronzer" checked={product_type.bronzer} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      <CheckboxContainer>
                      <div><label >Blush</label></div>
                      <div><input type="checkbox"  name="blush" value="blush" checked={product_type.blush} onChange={(event)=>{handleProductType(event)}}/></div>
                      </CheckboxContainer>
                      </BrandContainer>

                      <BrandContainer style={{margin:"1.5rem 0"}}>
                      <p><b>Price Range</b></p>
                      <div>
            <MultiRangeSlider
			min={1}
			max={35}
			step={5}
			ruler={false}
			label={true}
			preventWheel={false}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
        </div>
                      </BrandContainer>
                </FilterContainer>
                <ProductsContainer>
                <Products filters={filter}/>
                </ProductsContainer>
            </OuterContainer>
            <Newsletter/>
            <Footer/>
        </Maincontainer>
            
        
    )
}
