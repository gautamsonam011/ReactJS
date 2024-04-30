import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import POS from './POS-Components/POS';
import Coupons from './Coupons-Components/Coupons';
import SalesReturn from './SalesReturn-Components/SalesReturn';
import GiftCard from './GiftCard-compo/GiftCrd';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <POS/>
    <Coupons/>
    <SalesReturn/>
    <GiftCard/>
   
  </React.StrictMode>
);

reportWebVitals();
