import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { SectionContainer } from '../styles/globalStyles'
import styled from 'styled-components'
import skillsImage from '../images/skills.svg'
import { GitHub } from '@material-ui/icons'

const GridList = styled.ul`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  margin-bottom: 40px;

	li {
    margin-top: 30px;

    svg {
      display: block;
      margin: 0 auto;
    }
	}
`

const ProjInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    margin-right: 5px;
    line-height: 1.5;

    svg {
      position: absolute;
      margin-left: 5px;
    }
  }

  a {
    color: white;
  }
`

const SkillsComponent: FunctionComponent = () => (
	<SectionContainer primary>
    <img src={skillsImage} alt='Skills Image' />
		<div>
			<h2>Some of the tools I use</h2>
			<GridList>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Typescript</li>
        <li>Git</li>
        <li>Jest/Enzyme</li>
        <li>Jquery</li>
      </GridList>
      <ProjInfo>
        <p>
          This site was built in React and Typescript using Gatsby.
          <br />
          View this and other projects on <a target='_blank' href='https://github.com/ciarancorcoran/personal-portfolio'>github <GitHub /></a>
        </p>
      </ProjInfo>
		</div>
	</SectionContainer>
)

export default SkillsComponent
