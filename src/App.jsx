import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './Redux/Store'; // Import the Redux store
import './App.css';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS
import AppRoutes from './Routes'; // Import the Routes component

function App() {
  return (
    <Provider store={store}> {/* Wrap the app with the Provider */}
      <BrowserRouter> {/* Wrap Routes with BrowserRouter */}
        <AppRoutes /> {/* Use the Routes component */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
