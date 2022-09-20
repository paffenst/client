import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';

import App from './components/App'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 const store = createStore(
     reducers,
     composeEnhancers(applyMiddleware(reduxThunk))
     )

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<Provider store = {store} >
 <App tab="root" />,
</Provider>
);

// ReactDOM.render(
//   //  <Provider store= {store} >  
//     <App />,
//   //  </Provider>,
//     document.querySelector('#root') 
// ); 