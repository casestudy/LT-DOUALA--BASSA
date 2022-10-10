import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import '../../../Assets/css/hover.min.css';
import Header from '../../../Components/UI/About/Header'
import Hero from '../../../Components/UI/Events/Hero'
import Search from '../../../Components/UI/Academics/Search'
import Content from '../../../Components/UI/Academics/Content'
import Download from '../../../Components/UI/Academics/Download'
import Footer from '../../../Components/UI/Home/Footer';

function Events() {
  return (
    <div>
      	<Header value='events'></Header> 
        <Hero></Hero>
    </div>
  );
}

export default Events;