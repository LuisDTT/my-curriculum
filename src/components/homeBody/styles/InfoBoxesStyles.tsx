import { styled } from 'styled-components'

export const Container = styled.div`
	margin-top: 1rem;
	border: 3px solid ${({ theme }) => theme.colors.transparentColors.shadowColor};
	background-color: ${({ theme }) => theme.colors.transparentColors.bg};
	padding: 20px;
	border-radius: 10px;
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		/* flex-wrap: wrap; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		column-gap: 30px;
		row-gap: 25px;
		@media screen and (max-width: 400px) {
			grid-template-columns: 1fr;
		}

		.hasContent {
			padding: 30px 20px;
			display: grid;
			grid-template-rows: 60px 150px;
			row-gap: 10px;
			h6 {
				color: ${({ theme }) => theme.colors.headline};
				font-weight: 800;
				align-self: center;
				text-transform: uppercase;
			}
			p {
				padding: 0 10px;
				overflow-y: auto;
				text-align: left;
				line-height: 1.5em;
				scrollbar-color: ${({ theme }) =>
						theme.colors.transparentColors.secondary}
					transparent;
				scrollbar-width: thin;
				text-transform: inherit;
				&::-webkit-scrollbar {
					width: 6px;
				}
				&::-webkit-scrollbar-thumb {
					background-color: ${({ theme }) =>
						theme.colors.transparentColors.secondary};
					border-radius: 19px;
					border: 15px solid transparent;
				}
			}
		}
		li {
			${({ theme }) => {
				return {
					borderRight: `1px solid ${theme.colors.secondary}`,
					borderBottom: `1px solid ${theme.colors.secondary}`,
					boxShadow: `0px 2px 10px 0px ${theme.colors.transparentColors.shadowColor}`,
					color: theme.colors.paragraph,
					backgroundColor: theme.colors.bg
				}
			}}
			border-radius: 5px;
			padding: 10px 20px;
			text-align: center;
		}
	}
`
