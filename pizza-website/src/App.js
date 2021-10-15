import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalstyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { producData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose you favorites' data={producData}/>
      <Feature/>
      <Products heading='Sweet Treats for you' data={productDataTwo}/>
      <Footer/>
    </Router>
  )
}

export default App

