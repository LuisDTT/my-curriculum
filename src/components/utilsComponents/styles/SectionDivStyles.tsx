import { styled } from 'styled-components'

export const ContainerStyle = styled.div`
	h6 {
		color: ${({ theme }) => theme.colors.headline};
		font-weight: 600;
	}
	hr {
		color: ${({ theme }) => theme.colors.secondary};
	}
`
