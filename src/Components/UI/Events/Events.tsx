import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/About/Header'
import Hero from '../../../Components/UI/Events/Hero'
import Search from '../../../Components/UI/Events/Search'
import Lists from '../../../Components/UI/Events/Lists'

import NewsLetter from '../../../Components/UI/Home/NewsLetter'
import Footer from '../../../Components/UI/Home/Footer';

function Events() {
  return (
    <div>
      	<Header value='events'></Header> 
        <Hero></Hero>
        <Search></Search>
        <Lists></Lists>
        <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default Events;