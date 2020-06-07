import React, { FunctionComponent } from 'react'
import { SectionContainer } from '../styles/globalStyles'
import aboutImage from '../images/about.svg'

const AboutComponent: FunctionComponent = () => (
	<SectionContainer>
		<div>
			<h2>About Me</h2>
			<h3>I am a London based Front End Developer</h3>
			<p>I have almost a decade of experience as a front end developer and have a passion
				for building websites and apps that are both fast and responsive and using the latest technologies.</p>
		</div>
    <img src={aboutImage} alt='About Image' />
	</SectionContainer>
)

export default AboutComponent
