import { Link } from 'react-router-dom'
import { GetInTouchStyles } from './styles/GetInTouchStyles'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

export const GetInTouch = () => {
	return (
		<GetInTouchStyles>
			<Link to={'/contact'}>
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
