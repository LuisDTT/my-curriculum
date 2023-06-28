import { styled } from 'styled-components'

export const ResumeBodyStyles = styled.div`
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 0px;
	@media screen and (min-width: 1200px) {
		margin-top: 4rem;
		grid-template-columns: 2fr 1fr;
		.education {
			grid-area: 1 / 1 / 2 / 2;
		}
		.experience {
			grid-area: 2 / 1 / 3 / 2;
		}
		.skills {
			grid-area: 1 / 2 / 3 / 3;
		}
		.certificates {
			grid-area: 3 / 1 / 4 / 3;
		}
	}
`
