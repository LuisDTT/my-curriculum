import { Navigation } from './Navigation'
import { HeaderStyles, AvatarStyles } from './styles/SideHeaderStyles'
import { SocialNetworks } from './SocialNetworks'
import { FormattedMessage } from 'react-intl'
import { TranslateButton } from './TranslateButton'
import { Typography } from '@mui/material'
import avatar from '../../assets/images/myphoto.png'
import { GetInTouch } from './GetInTouch'

interface Props {
	showHeader: boolean
	menuToggle?: () => void
}

export const SideHeader = ({ showHeader, menuToggle }: Props): JSX.Element => {
	return (
		<HeaderStyles $showHeader={showHeader}>
			<div className="bg">
				<div className="main-header">
					<TranslateButton />
					<div className="main-header__top">
						<AvatarStyles>
							<img src={avatar} alt="Avatar" />
						</AvatarStyles>
						<Typography variant="h4">Luis Torres</Typography>
						<Typography variant="h5">
							<FormattedMessage
								defaultMessage="Front-end / Developer"
								id="sideHeader.jobTitle"
							/>
						</Typography>
						<SocialNetworks />
					</div>
					<Navigation menuToggle={menuToggle} />
					<GetInTouch menuToggle={menuToggle} />
				</div>
			</div>
		</HeaderStyles>
	)
}
