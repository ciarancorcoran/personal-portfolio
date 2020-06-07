import React, { FunctionComponent } from "react"
import heroImage from '../images/hero.svg'
import { SectionContainer } from '../styles/globalStyles'


const HeroComponent: FunctionComponent = () => (
  <SectionContainer primary>
    <img src={heroImage} alt='Hero Image' />
    <h1>
      Hi, I'm Ciarán
      <br />
      a front end developer
    </h1>
  </SectionContainer>
)

export default HeroComponent
