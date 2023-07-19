import { FormattedMessage } from 'react-intl'
import {
	ageCalcImages,
	orgImages,
	stepperImages,
	tasksImages,
	tipCalcImages
} from './projectAlbums'

export const myProjects = [
	{
		projectImg: orgImages[0],
		projectType: (
			<FormattedMessage
				id="portfolioBody.productivity"
				defaultMessage="Productivity project"
			/>
		),
		projectName: 'Alura - ORG',
		id: 'orgProject',
		projectInfo: {
			album: orgImages,
			projectDomain: 'https://org-rho-roan.vercel.app/',
			date: (
				<FormattedMessage
					id="portfolioBody.org.date"
					defaultMessage="/Project Date/"
				/>
			),
			text: (
				<FormattedMessage
					id="portfolioBody.org.info"
					defaultMessage="/Project Info/"
				/>
			),
			technologies: ['HTML5', 'React', 'Typescript', 'Styled Components']
		}
	},
	{
		projectImg: stepperImages[0],
		projectType: (
			<FormattedMessage
				id="portfolioBody.eCommerce"
				defaultMessage="eCommerce"
			/>
		),
		projectName: (
			<FormattedMessage
				id="portfolioBody.stepper"
				defaultMessage="Mui Stepper"
			/>
		),
		id: 'stepperProject',
		projectInfo: {
			album: stepperImages,
			projectDomain: 'https://mui-stepper.vercel.app/',
			date: (
				<FormattedMessage
					id="portfolioBody.org.date"
					defaultMessage="/Project Date/"
				/>
			),
			text: (
				<FormattedMessage
					id="portfolioBody.stepper.info"
					defaultMessage="/Project Info/"
				/>
			),
			text2: (
				<FormattedMessage
					id="portfolioBody.stepper.info2"
					defaultMessage="/Project Info/"
				/>
			),
			technologies: [
				'HTML5',
				'React',
				'Typescript',
				'Material UI',
				'Styled Component'
			]
		}
	},
	{
		projectImg: ageCalcImages[0],
		projectType: (
			<FormattedMessage
				id="portfolioBody.otherProject"
				defaultMessage="Other Projects"
			/>
		),
		projectName: (
			<FormattedMessage
				id="portfolioBody.ageCalc"
				defaultMessage="Frontend mentor - Age Calculator"
			/>
		),
		id: 'ageCalcProject',
		projectInfo: {
			album: ageCalcImages,
			projectDomain: 'https://age-calculator-roan.vercel.app/',
			date: (
				<FormattedMessage
					id="portfolioBody.ageCalc.date"
					defaultMessage="/Project Date/"
				/>
			),
			text: (
				<FormattedMessage
					id="portfolioBody.ageCalc.info"
					defaultMessage="/Project Info/"
				/>
			),
			technologies: ['HTML5', 'React', 'Typescript', 'Styled Component']
		}
	},
	{
		projectImg: tasksImages[0],
		projectType: (
			<FormattedMessage
				id="portfolioBody.productivity"
				defaultMessage="Productivity project"
			/>
		),
		projectName: (
			<FormattedMessage id="portfolioBody.tasks" defaultMessage="Tasks app" />
		),
		id: 'tasksProject',
		projectInfo: {
			album: tasksImages,
			projectDomain: 'https://luisdtt.github.io/react-app/',
			date: (
				<FormattedMessage
					id="portfolioBody.tasks.date"
					defaultMessage="/Project Date/"
				/>
			),
			text: (
				<FormattedMessage
					id="portfolioBody.tasks.info"
					defaultMessage="/Project Info/"
				/>
			),
			technologies: ['React', 'Tailwind CSS']
		}
	},
	{
		projectImg: tipCalcImages[0],
		projectType: (
			<FormattedMessage
				id="portfolioBody.productivity"
				defaultMessage="Productivity"
			/>
		),
		projectName: (
			<FormattedMessage
				id="portfolioBody.tipCalc"
				defaultMessage="Tip calculator"
			/>
		),
		id: 'tipCalcProject',
		projectInfo: {
			album: tipCalcImages,
			projectDomain: 'https://luisdtt.github.io/tip-calculator-app-main/',
			date: (
				<FormattedMessage
					id="portfolioBody.tipCalc.date"
					defaultMessage="/Project Date/"
				/>
			),
			text: (
				<FormattedMessage
					id="portfolioBody.tipCalc.info"
					defaultMessage="/Project info/"
				/>
			),
			technologies: ['Javascript', 'HTML', 'Sass']
		}
	}
]
