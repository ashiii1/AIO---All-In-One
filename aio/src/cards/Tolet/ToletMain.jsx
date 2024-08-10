// ToletMain.js
import React from 'react';
import ToletApp from './ToletApp';
import '../../App.css'
import { HouseContextProvider } from './components/HouseContext'; // Adjust path as needed


const ToletMain = () => {
 
return(
    <HouseContextProvider>
        <ToletApp />
    </HouseContextProvider>
);
}

export default ToletMain;
