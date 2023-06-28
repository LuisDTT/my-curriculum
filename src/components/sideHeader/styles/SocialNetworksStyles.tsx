import { styled } from 'styled-components'

export const SocialNetworksStyles = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 30px;
	padding: 8px;
	margin-bottom: 30px; //margin
	ul {
		display: flex;
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			:hover {
				color: #ddd;
				transform: scale(1.04);
			}
			a {
				font-size: 30px;
				text-decoration: none;
				color: ${({ theme }) => theme.colors.white};
				margin: 0 7px;
				display: flex;
			}
		}
	}
`
