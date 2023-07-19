import { Typography } from '@mui/material'
import { Container } from './styles/ContactBoxStyles'

interface Props {
	icon: React.ReactNode
	data: React.ReactNode
}

export const ContactBox = ({ icon, data }: Props) => {
	return (
		<Container>
			<span className="icon">{icon}</span>
			<Typography variant="h6" component="p">
				{data}
			</Typography>
		</Container>
	)
}
