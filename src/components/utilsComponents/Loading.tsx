import { CircularProgress } from '@mui/material'
import { LoadingContainerStyles } from './styles/LoadingContainerStyles'

export const Loading = () => {
	return (
		<LoadingContainerStyles>
			<CircularProgress color="secondary" />
		</LoadingContainerStyles>
	)
}

export default Loading
