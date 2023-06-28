import { Button, Typography } from '@mui/material'
import { BodyError, ErrorContainer } from './styles/Error404Styles'
import { NavLink } from 'react-router-dom'

export const Error404 = () => {
	return (
		<BodyError>
			<Typography variant="h1">Page not found</Typography>
			<Typography variant="h5" component={'p'} className="zoom-area">
				<b>Ooops!</b> You weren't supposed to see this
			</Typography>
			<ErrorContainer className="error-container">
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
				<span className="zero">
					<span className="screen-reader-text">0</span>
				</span>
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
			</ErrorContainer>
			<NavLink to={'/'}>
				<Button
					variant="outlined"
					sx={(theme) => ({
						color: 'text.primary',
						px: 5,
						py: 1.2,
						fontFamily: theme.typography.fontFamily,
						backgroundColor: '#ffffff1f'
					})}
				>
					Go to Home
				</Button>
			</NavLink>
		</BodyError>
	)
}
