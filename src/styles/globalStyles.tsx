import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
  }

	h1, h2 {
		font-size: 2rem;
		margin: 0;
	}
	
	h3 {
		font-size: 1.5rem;
	}

	h4 {
		font-size: 1.25rem;
	}

	ul {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}
`

interface SectionContainerProps {
	primary?: boolean
}

export const SectionContainer = styled.section`
  /* Adapt the colors based on primary prop */
  background-color: ${(props: SectionContainerProps) => props.primary ? '#6C63FF' : '#ffffff'};
  color: ${(props: SectionContainerProps) => props.primary ? '#ffffff' : '#000000'};

	text-align: center;
  padding: 50px 30px;

	h1, h2, h3 {
		margin-bottom: 0;
		margin-top: 30px;
	}

	img {
		width: 65%;
		max-width: 500px;
		height: auto;
		margin: 0 auto;
	}

	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
		padding: 50px 100px;

		h1 {
			margin-top: 0;
			font-size: 2.5rem;
		}

		img {
			width: 100%;
		}
	}

	@media (min-width: 1382px) {
		padding: 50px 200px;
	}
`