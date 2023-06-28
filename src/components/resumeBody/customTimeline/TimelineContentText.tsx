import { Typography } from '@mui/material'
import {
	LeftContentStyles,
	RightContentStyles
} from './styles/TimelineContentTextStyles'

interface Props {
	heading: JSX.Element | string
	text: JSX.Element | string
}

const RightContent = ({ heading, text }: Props) => {
	return (
		<RightContentStyles>
			<Typography variant="body1" component="p" className="heading">
				{heading}
			</Typography>
			<Typography variant="body1" component="span" className="text">
				{text}
			</Typography>
		</RightContentStyles>
	)
}

const LeftContent = ({ heading, text }: Props) => {
	return (
		<LeftContentStyles>
			<Typography variant="h6" component="p" className="heading">
				{heading}
			</Typography>
			<Typography variant="body1" component="span" className="text">
				{text}
			</Typography>
		</LeftContentStyles>
	)
}

export { RightContent, LeftContent }
