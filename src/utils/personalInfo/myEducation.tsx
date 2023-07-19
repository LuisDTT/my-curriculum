import { FormattedMessage } from 'react-intl'
import { TimelineData } from '../../interfaces/customTimeLine'

export const EducationList: TimelineData = [
	{
		leftContent: {
			heading: '2020 - 2022',
			paragraph: 'SENA'
		},
		rightContent: {
			heading: (
				<FormattedMessage
					id="resumeBody.education.technician"
					defaultMessage="Software development technician"
				/>
			),
			paragraph: (
				<FormattedMessage
					id="resumeBody.education.technician.text"
					defaultMessage="Text about me"
				/>
			)
		}
	},
	{
		leftContent: {
			heading: (
				<FormattedMessage
					id="resumeBody.education.currentTime"
					defaultMessage="2022 - Current"
					values={{ time: '2022' }}
				/>
			),
			paragraph: (
				<FormattedMessage
					id="resumeBody.education.universityName"
					defaultMessage="University of UNICOLOMBO"
					values={{ university: 'UNICOLOMBO' }}
				/>
			)
		},
		rightContent: {
			heading: (
				<FormattedMessage
					id="resumeBody.education.engineering"
					defaultMessage="System Engineering"
				/>
			),

			paragraph: (
				<FormattedMessage
					id="resumeBody.education.engineering.text"
					defaultMessage="Text about me"
				/>
			)
		}
	},
	{
		leftContent: {
			heading: '2022 - 2023',
			paragraph: 'ONE - Oracle Next Education'
		},
		rightContent: {
			heading: (
				<FormattedMessage
					id="resumeBody.education.frontend"
					defaultMessage="Front-End specialization"
				/>
			),
			paragraph: (
				<FormattedMessage
					id="resumeBody.education.frontend.text"
					defaultMessage="Text about me"
				/>
			)
		}
	}
]
