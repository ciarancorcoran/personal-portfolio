import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Code, Twitter, LinkedIn, Instagram, GitHub } from '@material-ui/icons'


const ContactContainer = styled.footer`
  background: #3F3D56;
  text-align: center;
  color: #ffffff;
  padding: 50px;
  position: relative;

  ul li {
    display: inline-block;
    margin-top: 30px;
    padding: 20px;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    svg {
      font-size: 3em;
    }
  }

  .legal {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    font-size: .75rem;
  }
`

const ContactComponent: FunctionComponent = () => (
  <ContactContainer>
    <h2>
      Contact
    </h2>
    <ul>
      <li>
        <a target='_blank' href='https://github.com/ciarancorcoran/personal-portfolio'><GitHub /></a>
      </li>
      <li>
        <a target='_blank' href='https://bitbucket.org/ciaranjcorcoran/'><Code /></a>
      </li>
      <li>
        <a target='_blank' href='https://www.linkedin.com/in/ciar%C3%A1n-corcoran-b3a59540'><LinkedIn /></a>
      </li>
      <li>
        <a target='_blank' href='https://twitter.com/C0rcs'><Twitter /></a>
      </li>
      <li>
      <a target='_blank' href='https://www.instagram.com/cjcorcs/'><Instagram /></a>
      </li>
    </ul>
    <div className='legal'>
      <p>© Ciarán Corcoran {new Date().getFullYear()}</p>
    </div>
  </ContactContainer>
)

export default ContactComponent
