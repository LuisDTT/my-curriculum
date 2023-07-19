import { Typography } from '@mui/material'
import { SectionContainerStyles } from './styles/SectionContainerStyles'
import { ElementType } from 'react'

interface Props {
	header?: {
		tag: ElementType
		content: JSX.Element | string
		defaultAccentStyle?: boolean
		customAccentStyle?: React.ReactNode
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
					{header.defaultAccentStyle && <span className="accent"></span>}
					{header.customAccentStyle}
				</Typography>
			)}
			{children}
		</SectionContainerStyles>
	)
}

export default SectionContainer
