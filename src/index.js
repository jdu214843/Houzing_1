import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Houzing from "./Houzing";
import App from "./Houzing/Section/index.jsx"
import Description from "./Houzing/Description/index.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Houzing />
  <App/>
  <Description/>
  </React.StrictMode>
);

