import { styled } from 'styled-components'

export const ContainerSkillsStyles = styled.div`
	ul {
		margin: 25px 0;
	}
`

export const SkillsStyles = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

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

export const SkillItemStyles = styled.li<{
	$bgColor: string
	$textColor: string
	$borderColor?: string
}>`
	.skill-item {
		${({ $bgColor, $textColor, $borderColor }) =>
			`color: ${$textColor}; 
            background-color: ${$bgColor}; 
            ${$borderColor && `border: 2px solid${$borderColor};`}`};
		padding: 5px 0;
		font-weight: 800;
		border-radius: 10px;
		letter-spacing: 0.8px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		.skill-item-icon {
			font-size: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`
