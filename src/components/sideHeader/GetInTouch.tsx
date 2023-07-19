import { Link } from 'react-router-dom'
import { GetInTouchStyles } from './styles/GetInTouchStyles'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

interface Props {
	menuToggle?: () => void
}

export const GetInTouch = ({ menuToggle }: Props) => {
	return (
		<GetInTouchStyles>
			<Link to={'/contact'} onClick={menuToggle}>
				<Typography variant="h5" component="p" className="text">
					<FormattedMessage
						defaultMessage="Get in touch"
						id="sideHeader.getInTouch"
					/>
				</Typography>
			</Link>
		</GetInTouchStyles>
	)
}
