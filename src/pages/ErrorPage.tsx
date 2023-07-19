// @ts-noCheck

import { Button, Typography } from '@mui/material'
import { BodyError, ErrorContainer } from './styles/Error404Styles'
import { NavLink, useRouteError } from 'react-router-dom'

interface Props {
	customError?: {
		status: string
		statusText: string
	}
}

export const ErrorPage = ({ customError }: Props) => {
	const error = useRouteError() as ReturnType<any>
	return (
		<BodyError>
			<Typography variant="h2">
				<b>Ooops!</b> You weren't supposed to see this
			</Typography>
			<Typography variant="h5" component={'p'} className="zoom-area">
				Sorry, an expected error has occurred.
			</Typography>
			<ErrorContainer className="error-container">
				<Typography variant="h6" component={'div'}>
					<i>
						<span>{customError?.status || error?.status}</span>-
						<span>{customError?.statusText || error?.statusText}</span>
					</i>
				</Typography>
			</ErrorContainer>

			<NavLink to={'#'} onClick={() => history.back()}>
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
					Go Back
				</Button>
			</NavLink>
		</BodyError>
	)
}
