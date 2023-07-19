import { styled } from 'styled-components'

export const ItemsStyles = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	li {
		${({ theme }) =>
			`color : ${theme.colors.others.primaryText}; 
			background-color: ${theme.colors.primary};`}
		border-radius: 20px;
		padding: 8px 15px;
		text-transform: capitalize;
		text-align: center;
	}
`
