import { Typography } from '@mui/material'
import { ContainerStyle } from './styles/SectionDivStyles'

interface Props {
	title: JSX.Element | string
	children: JSX.Element
}

export const SectionDiv = ({ title, children }: Props) => {
	return (
		<ContainerStyle>
			<Typography variant="h5" component="h6">
				{title}
			</Typography>
			<hr />
			{children}
		</ContainerStyle>
	)
}

export default SectionDiv
