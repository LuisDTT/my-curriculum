import { Typography } from '@mui/material'
import { SuccessfulCardStyles } from './styles/SuccessfulCard'

interface Props {
	topText: string | JSX.Element
	bottomText: string | JSX.Element
	icon: React.ReactNode
}

export const SuccessfulCard = ({ bottomText, icon, topText }: Props) => {
	return (
		<SuccessfulCardStyles>
			<Typography variant="h5" component="span">
				{topText}
			</Typography>
			<span className="tick">{icon}</span>
			<Typography variant="body1">{bottomText}</Typography>
		</SuccessfulCardStyles>
	)
}
