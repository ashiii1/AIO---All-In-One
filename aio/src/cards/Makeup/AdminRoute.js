import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import Home from './pages/Home'


export default function AdminRoute({path,component}) {
    console.log("in AdminRoute")
    const user=useSelector(state=>state.user)
    
    return(
        <Route 
        path={path}
        render={()=>{
            return (user.currentUser.isAdmin)?<>{component}</>:<Home/>
        }}></Route>
    )
}
