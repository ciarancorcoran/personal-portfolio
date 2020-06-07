import React from 'react'
import HeroComponent from '../components/HeroComponent'
import AboutComponent from '../components/AboutComponent'
import SkillsComponent from '../components/SkillsComponent'
import ContactComponent from '../components/ContactComponent'
import { GlobalStyle } from '../styles/globalStyles'



const IndexPage = () => (
  <>
    <HeroComponent />
    <AboutComponent />
    <SkillsComponent />
    <ContactComponent />
    <GlobalStyle />
  </>
)

export default IndexPage
