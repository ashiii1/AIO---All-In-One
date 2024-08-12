// import * as redux from "redux";
// import * as yup from 'yup';

// import { cartReducer } from "./cartReducer.js";
// import { userReducer } from "./userReducer.js";
// import { persistStore, persistReducer } from 'redux-persist'
// // import {storage} from 'redux-persist/es/storage'; // If localStorage is the default export
//  import { encryptTransform } from 'redux-persist-transform-encrypt';
// import { searchReducer } from "./searchReducer.js";
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//     key: 'root',
//     storage,
//     transforms: [
//         encryptTransform({
//           secretKey: 'mayuB!@dE',
//           onError: function (error) {
//             console.log(error)
//           },
//         }),
//       ]
//   }

// const enhancers = redux.compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

// const rootReducer=redux.combineReducers({
//     cart:cartReducer,
//     user:userReducer,
//     search:searchReducer
  
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

//  export const store=redux.createStore(
//     persistedReducer,
//     enhancers)

//     export  let persistor = persistStore(store);
import * as redux from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/index.js'; // Ensure this path is correct
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { cartReducer } from "./cartReducer.js";
import { userReducer } from "./userReducer.js";
import { searchReducer } from "./searchReducer.js";

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'mayuB!@dE',
            onError: function (error) {
                console.log(error);
            },
        }),
    ],
};

const enhancers = redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const rootReducer = redux.combineReducers({
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = redux.createStore(
    persistedReducer,
    enhancers
);

export let persistor = persistStore(store);
