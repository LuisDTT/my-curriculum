import { Navigation } from './Navigation'
import { HeaderStyles, ProfileStyles } from './styles/SideHeaderStyles'
import { SocialNetworks } from './SocialNetworks'
import { GetInTouchStyles } from './styles/GetInTouchStyles'
import { FormattedMessage } from 'react-intl'
import { TranslateButton } from './TranslateButton'
import { Typography } from '@mui/material'
import avatar from '../../assets/images/myphoto.png'

interface Props {
	showHeader: boolean
}

export const SideHeader = ({ showHeader }: Props): JSX.Element => {
	return (
		<HeaderStyles $showHeader={showHeader}>
			<div className="bg">
				<div className="main-header">
					<TranslateButton />
					<div className="main-header__top">
						<ProfileStyles>
							<img src={avatar} alt="Avatar" />
						</ProfileStyles>
						<Typography variant="h4">Luis Torres</Typography>
						<Typography variant="h5">
							<FormattedMessage
								defaultMessage="Front-end / Developer"
								id="sideHeader.jobTitle"
							/>
						</Typography>
						<SocialNetworks />
					</div>
					<Navigation />
					<GetInTouchStyles>
						<Typography variant="h5" component="p" className="text">
							<FormattedMessage
								defaultMessage="Get in touch"
								id="sideHeader.getInTouch"
							/>
						</Typography>
					</GetInTouchStyles>
				</div>
			</div>
		</HeaderStyles>
	)
}
