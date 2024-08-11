// ToletMain.js
import React from 'react';
import ToletApp from './ToletApp';
import  HouseContextProvider  from './components/HouseContext'; // Adjust path as needed


const ToletMain = () => {
 
return(
    <HouseContextProvider>
        <ToletApp />
    </HouseContextProvider>
);
}

export default ToletMain;
