import { Typography } from '@mui/material'
import { Container } from './styles/InfoBoxesStyles'
import { DataList } from '../../interfaces/personalInfo'

interface Props {
	itemsList: DataList
}

export const InfoBoxes = ({ itemsList }: Props) => {
	return (
		<Container>
			<ul>
				{itemsList.map((item, index) => (
					<li key={index} className={item.content && 'hasContent'}>
						<Typography variant={item.content ? 'h6' : 'body1'}>
							{item.title}
						</Typography>
						{item.content && (
							<Typography variant="body1" component="p">
								{item.content}
							</Typography>
						)}
					</li>
				))}
			</ul>
		</Container>
	)
}
