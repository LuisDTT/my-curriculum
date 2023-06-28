import { FormattedMessage } from 'react-intl'
import { EducationList, ExperienceList } from '../utils/PersonalInfo'
import SectionContainer from '../components/utilsComponents/SectionContainer'
import EducationTimeline from '../components/resumeBody/TimelineContainer'
import ExperienceTimeline from '../components/resumeBody/TimelineContainer'
import { ResumeBodyStyles } from './styles/ResumeStyles'
import { SkillsComponent } from '../components/resumeBody/SkillsComponent'
import { Certificates } from '../components/resumeBody/myCertificates'
import { BodyContainer } from '../components/BodyContainer'
import { Header } from '../components/sideHeader/Header'
import { ContainerStyles } from './styles/ContainerStyles'

export const Resume = () => {
	return (
		<ContainerStyles>
			<Header />
			<BodyContainer>
				<SectionContainer
					header={{
						content: (
							<FormattedMessage
								id="resumeBody.header"
								defaultMessage="Resume"
							/>
						),
						tag: 'h5'
					}}
				>
					<ResumeBodyStyles>
						<div className="education">
							<EducationTimeline
								infoList={EducationList}
								header={
									<FormattedMessage
										id="resumeBody.education"
										defaultMessage="Education"
									/>
								}
							/>
						</div>

						<div className="experience">
							<ExperienceTimeline
								infoList={ExperienceList}
								header={
									<FormattedMessage
										id="resumeBody.experience"
										defaultMessage={'Experience'}
									/>
								}
							/>
						</div>
						<div className="skills">
							<SkillsComponent />
						</div>
						<div className="certificates">
							<Certificates />
						</div>
					</ResumeBodyStyles>
				</SectionContainer>
			</BodyContainer>
		</ContainerStyles>
	)
}
