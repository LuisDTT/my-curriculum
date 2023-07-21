import { styled } from 'styled-components'

export const CertificatesStyles = styled.div`
	margin-top: 2rem;
	gap: 2.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	@media screen and (min-width: 1400px) {
		grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
	}
`
