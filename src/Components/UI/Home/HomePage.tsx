import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/Header/Header'
import Image from '../../../Components/UI/Image/Image'
import Content from '../../../Components/UI/Home/Content'
import Navigation from '../../../Components/UI/Home/Navigation'
import Welcome from '../../../Components/UI/Home/Welcome';

import SchoolLogo from '../../../Assets/logo.jpg';

function HomePage() {
  return (
    <div>
      <Header></Header>
      <div style={{position: "relative", background: "#004296"}}><Image source={SchoolLogo} height='150px' width='150px' mtop='15px'></Image></div>
      <Content></Content>
      <Navigation></Navigation>
      <Welcome></Welcome>
    </div>  
  );
}

export default HomePage;