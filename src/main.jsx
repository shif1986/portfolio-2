import React from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/utils/settings.scss'


// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
