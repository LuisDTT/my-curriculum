import { Typography } from '@mui/material'
import { SectionContainerStyles } from './styles/SectionContainerStyles'
import { ElementType } from 'react'

interface Props {
	header?: {
		tag: ElementType
		content: JSX.Element | string
	}
	children: JSX.Element
	row?: boolean
}

export const SectionContainer = ({ header, children, row }: Props) => {
	return (
		<SectionContainerStyles $direction={row ? 'row' : 'column'}>
			{header && (
				<Typography variant="h3" className="title" component={header.tag}>
					{header.content}
					<span className="accent"></span>
				</Typography>
			)}
			{children}
		</SectionContainerStyles>
	)
}

export default SectionContainer
