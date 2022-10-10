import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import AboutUs from './Components/UI/About/AboutUs'
import Academics from './Components/UI/Academics/Academics'
import Events from './Components/UI/Events/Events'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Routes, Route, BrowserRouter } from "react-router-dom";

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="academics" element={<Academics />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<MainApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
