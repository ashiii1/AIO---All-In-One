// import React from 'react';
// import MakeUpApp from './MakeUpApp'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Provider} from "react-redux"
// import {store,persistor} from "./redux/store"
// import { PersistGate } from 'redux-persist/integration/react'

// const MakeupMain = () => {
// return(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//     <MakeUpApp />
//     </PersistGate>
//   </Provider>
// );

// }

// export default MakeupMain

import MakeUpApp from './MakeUpApp'

    import React from "react";
  
    import Context from "./Context";
    import AuthProvider from "./AuthProvider";
    
    // Call make Server
   
    
const MakeupMain = () => {
  return (
      <AuthProvider>
        <Context>
            <React.StrictMode>
              <MakeUpApp />
            </React.StrictMode>
        </Context>
      </AuthProvider>
      
  )}
    
 

export default MakeupMain