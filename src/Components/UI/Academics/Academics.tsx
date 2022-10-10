import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/About/Header'
import Hero from '../../../Components/UI/Academics/Hero'
import Search from '../../../Components/UI/Academics/Search'
import Content from '../../../Components/UI/Academics/Content'
import Download from '../../../Components/UI/Academics/Download'
import Testimonials from '../../../Components/UI/About/Testimonials'
import Sponsor from '../../../Components/UI/Home/Sponsor';
import Footer from '../../../Components/UI/Home/Footer';

function Academics() {
  return (
    <div>
      	<Header value='academics'></Header> 
        <Hero></Hero>
        <Search></Search>
        <Content></Content>
        <Download></Download>
        <Footer></Footer>
    </div>
  );
}

export default Academics;