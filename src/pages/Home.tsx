import { AboutSection } from '../components/homeBody/AboutSection'
import { IllustrationHome } from '../components/homeBody/IllustrationHome'
import { SectionContainer } from '../components/utilsComponents/SectionContainer'
import { FormattedMessage } from 'react-intl'
import { InfoBoxes } from '../components/homeBody/InfoBoxes'
import { Interests, WhatIDo } from '../utils/PersonalInfo'
import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Luis Torres CV</title>
			</Helmet>
			<div>
				<AboutSection />
				<SectionContainer
					header={{
						content: (
							<FormattedMessage
								id="homeBody.interests"
								defaultMessage={'Interests'}
							/>
						),
						tag: 'h3'
					}}
				>
					<InfoBoxes itemsList={Interests} />
				</SectionContainer>
				<SectionContainer
					header={{
						content: (
							<FormattedMessage
								id="homeBody.whatIDo"
								defaultMessage={'What I do?'}
							/>
						),
						tag: 'h3'
					}}
				>
					<InfoBoxes itemsList={WhatIDo} />
				</SectionContainer>
				<IllustrationHome />
			</div>
		</>
	)
}

export default Home
