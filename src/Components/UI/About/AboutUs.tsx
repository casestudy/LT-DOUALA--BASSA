import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/About/Header'
import Hero from '../../../Components/UI/About/Hero'
import Achievements from '../../../Components/UI/About/Achievements'
import Content from '../../../Components/UI/About/Content'
import Image from '../../../Components/UI/About/Image'
import Testimonials from '../../../Components/UI/About/Testimonials'
import Sponsor from '../../../Components/UI/Home/Sponsor';
import Footer from '../../../Components/UI/Home/Footer';

function AboutUs() {
  return (
    <div>
      	<Header></Header> 
      	<Hero></Hero>
        <Achievements></Achievements>
        <Content></Content>
        <Image></Image>
        <Testimonials></Testimonials>
        <Sponsor></Sponsor>
        <Footer></Footer>
    </div>
  );
}

export default AboutUs;