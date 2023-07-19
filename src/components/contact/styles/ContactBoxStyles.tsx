import { styled } from 'styled-components'

export const Container = styled.div`
	flex-grow: 1;
	min-width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 7px;
	padding: 15px;
	box-shadow: 0px 4px 14px 0px #00000023;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.others.headline};
	background-color: ${({ theme }) => theme.colors.bg};
	.icon {
		color: ${({ theme }) => theme.colors.others.icons};
		font-size: 32px;
	}
`
