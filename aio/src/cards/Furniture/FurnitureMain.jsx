import React from 'react'
import { Analytics } from "@vercel/analytics/react";
import { StateProvider } from "./contexts/StateContext";
import FurnitureApp from './FurnitureApp'

const FurnitureMain = () => {
 
return(

    <StateProvider>
        <FurnitureApp />
        <Analytics />
    </StateProvider>
);

}

export default FurnitureMain