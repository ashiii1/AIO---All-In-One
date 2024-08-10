// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// // Create a root container
// const container = document.getElementById('root');
// const root = createRoot(container);

// // Render the application
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
