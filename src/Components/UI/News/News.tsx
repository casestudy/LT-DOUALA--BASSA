import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/About/Header'
import Hero from '../../../Components/UI/News/Hero'
import Search from '../../../Components/UI/Academics/Search'
import Latest from '../../../Components/UI/News/Latest'

import NewsLetter from '../../../Components/UI/Home/NewsLetter'
import Footer from '../../../Components/UI/Home/Footer';

function News() {
  return (
    <div>
      	<Header value='news'></Header> 
        <Hero></Hero>
        <Search></Search>
        <Latest></Latest>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
    </div>
  );
}

export default News;