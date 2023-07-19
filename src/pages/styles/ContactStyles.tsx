import { styled } from 'styled-components'

export const ContactStyles = styled.div`
	.subtitle {
		color: ${({ theme }) => theme.colors.paragraph};
	}
	.contact-info {
		display: flex;
		gap: 40px;
		margin-top: 2rem;
		flex-wrap: wrap;
	}
`
