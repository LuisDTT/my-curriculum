import { FormattedMessage } from 'react-intl'
import SectionContainer from '../components/utilsComponents/SectionContainer'
import EducationTimeline from '../components/resumeBody/TimelineContainer'
import ExperienceTimeline from '../components/resumeBody/TimelineContainer'
import { ResumeBodyStyles } from './styles/ResumeStyles'
import { SkillsComponent } from '../components/resumeBody/SkillsComponent'
import { Certificates } from '../components/resumeBody/myCertificates'
import { EducationList } from '../utils/personalInfo/myEducation'
import { ExperienceList } from '../utils/personalInfo/myExperience'
import { Helmet } from 'react-helmet-async'
import { myCertificates } from '../utils/personalInfo/myCertificates'

export const Resume = () => {
	return (
		<>
			<Helmet>
				<title>LT Resume</title>
			</Helmet>
			<SectionContainer
				header={{
					content: (
						<FormattedMessage id="resumeBody.header" defaultMessage="Resume" />
					),
					tag: 'h5',
					defaultAccentStyle: true
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
						<Certificates certificateList={myCertificates} />
					</div>
				</ResumeBodyStyles>
			</SectionContainer>
		</>
	)
}

export default Resume
