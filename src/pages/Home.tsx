import { AboutSection } from '../components/homeBody/AboutSection'
import { IllustrationHome } from '../components/homeBody/IllustrationHome'
import { SectionContainer } from '../components/utilsComponents/SectionContainer'
import { FormattedMessage } from 'react-intl'
import { InfoBoxes } from '../components/homeBody/InfoBoxes'
import { Interests, WhatIDo } from '../utils/PersonalInfo'
import { BodyContainer } from '../components/BodyContainer'
import { Header } from '../components/sideHeader/Header'
import { ContainerStyles } from './styles/ContainerStyles'

export const Home = () => {
	return (
		<ContainerStyles>
			<Header />
			<BodyContainer>
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
			</BodyContainer>
		</ContainerStyles>
	)
}
