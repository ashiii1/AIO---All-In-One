// import React from "react";
// import FoodApp from './FoodApp';
// import { ChakraProvider } from "@chakra-ui/react";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { store } from "./Redux/store";
// import { Provider } from "react-redux";

// const RootComponent = () => (
//   <Auth0Provider
//     domain={process.env.REACT_APP_AUTH0_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
//     authorizationParams={{
//       redirect_uri: window.location.origin,
//     }}
//   >
//     <ChakraProvider>
//       <Provider store={store}>
//         <FoodApp />
//       </Provider>
//     </ChakraProvider>
//   </Auth0Provider>
// );

// export default RootComponent;

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import FoodApp from './FoodApp'
    import React from 'react'
    import StoreContextProvider from './Context/StoreContext.jsx'
    
    
const FoodOrderMain = () => {
  return (
          <StoreContextProvider>
            <FoodApp />
          </StoreContextProvider>
    )
    
  
}

export default FoodOrderMain