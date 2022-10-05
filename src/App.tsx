import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Assets/css/hover.min.css';
import Header from './Components/UI/Header/Header'
import Image from './Components/UI/Image/Image'
import Content from './Components/UI/Home/Content'
import Navigation from './Components/UI/Home/Navigation'
import Welcome from './Components/UI/Home/Welcome';
import Featured from './Components/UI/Home/Featured';
import Future from './Components/UI/Home/Future';
import Calendar from './Components/UI/Home/Calendar';
import Action from './Components/UI/Home/Action';
import Achievement from './Components/UI/Home/Achievement';
import News from './Components/UI/Home/News';
import Gallery from './Components/UI/Home/Gallery';
import Video from './Components/UI/Home/Video';
import Testimonials from './Components/UI/Home/Testimonials';
import Sponsor from './Components/UI/Home/Sponsor';
import NewsLetter from './Components/UI/Home/NewsLetter';
import Footer from './Components/UI/Home/Footer';
import SchoolLogo from './Assets/logo.jpg';

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{position: "relative", background: "#004296"}}><Image source={SchoolLogo} height='150px' width='150px' mtop='15px'></Image></div>
      <Content></Content>
      <Navigation></Navigation>
      <Welcome></Welcome>
      <Featured></Featured>
      <Future></Future>
      <Action></Action>
      <Calendar></Calendar>
      <Achievement></Achievement>
      <News></News>
      <Gallery></Gallery>
      <Video></Video>
      <Testimonials></Testimonials>
      <Sponsor></Sponsor>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>  
  );
}

export default App;