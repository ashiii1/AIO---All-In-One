import * as redux from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 import { encryptTransform } from 'redux-persist-transform-encrypt';
import { searchReducer } from "./searchReducer";

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
          secretKey: 'mayuB!@dE',
          onError: function (error) {
            console.log(error)
          },
        }),
      ]
  }

const enhancers = redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const rootReducer=redux.combineReducers({
    cart:cartReducer,
    user:userReducer,
    search:searchReducer
  
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store=redux.createStore(
    persistedReducer,
    enhancers)

    export  let persistor = persistStore(store);