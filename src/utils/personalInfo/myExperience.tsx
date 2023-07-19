import { FormattedMessage } from 'react-intl'
import { TimelineData } from '../../interfaces/customTimeLine'

export const ExperienceList: TimelineData = [
	{
		rightContent: {
			heading: (
				<FormattedMessage
					id="resumeBody.experience.system"
					defaultMessage="Systems Technician"
				/>
			),
			paragraph: (
				<FormattedMessage
					id="resumeBody.experience.system.text"
					defaultMessage="Text about me"
				/>
			)
		},
		leftContent: {
			heading: '2022',
			paragraph: 'Bienestar IPS'
		}
	}
]
