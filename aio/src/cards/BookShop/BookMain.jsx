import React from 'react'
import BookApp from './BookApp';
import { Provider } from 'react-redux';
import store from './redux/store';




const BookMain = () => {
return (
  <Provider store={store}>
        <BookApp />
  </Provider>
);
}

export default BookMain