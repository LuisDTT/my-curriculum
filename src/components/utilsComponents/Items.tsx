import { Typography } from '@mui/material'
import { ItemsStyles } from './styles/ItemsStyles'

interface ItemsProps {
	itemList: (JSX.Element | string)[]
}
export const Items = ({ itemList }: ItemsProps) => {
	return (
		<ItemsStyles>
			{itemList.map((item, index) => (
				<Typography key={index} variant="body1" component={'li'}>
					{item}
				</Typography>
			))}
		</ItemsStyles>
	)
}
