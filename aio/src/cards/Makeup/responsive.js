import {css} from "styled-components";

export const small=(props)=>{
    return css`
    @media only screen and (max-width:500px){
        ${props}
    }
    `
}

export const medium=(props)=>{
    return css`
    @media only screen and (max-width:740px){
        ${props}
    }
    `
}
export const large=(props)=>{
    return css`
    @media only screen and (max-width:920px){
        ${props}
    }
    `
}
