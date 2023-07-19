import { Typography } from '@mui/material'
import { AiOutlineLeft } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { BelowContainerStyles } from './styles/BelowContainerStyles'

interface Props {
	link: string
	linkMessage: string | JSX.Element
	besideMessage: string | JSX.Element
}

export const BelowContainer = ({ besideMessage, link, linkMessage }: Props) => {
	return (
		<BelowContainerStyles>
			<Typography variant="h6" component="span" className="subtitle">
				<a href={link} target="_blank">
					{linkMessage}
				</a>
				- <span>{besideMessage}</span>
			</Typography>
			<Link to="/portfolio" className="backLink">
				<Typography variant="button" component="span">
					<AiOutlineLeft />
					<FormattedMessage id="back" defaultMessage="Back" />
				</Typography>
			</Link>
		</BelowContainerStyles>
	)
}
