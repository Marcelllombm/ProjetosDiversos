import React,{useState} from 'react'
import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <HeroContainer>
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn>Plance Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero;
