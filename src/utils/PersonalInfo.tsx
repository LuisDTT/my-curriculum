import { FormattedMessage } from 'react-intl'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DataList, SkillsList } from '../interfaces/personalInfo'
import {
	TbBrandJavascript,
	TbBrandReact,
	TbBrandHtml5,
	TbBrandCss3,
	TbBrandGit,
	TbBrandTypescript
} from 'react-icons/tb'

const Interests: DataList = [
	{
		title: (
			<FormattedMessage
				id="homeBody.interests.webDevelopment"
				defaultMessage="Web development"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.interests.uIDesign"
				defaultMessage="User interface design"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.interests.webAccessibility"
				defaultMessage="Web accessibility"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.interests.frameworksAndTools"
				defaultMessage="Frameworks and tools"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.interests.techUpgrades"
				defaultMessage="Technological upgrades"
			/>
		)
	}
]

const WhatIDo: DataList = [
	{
		title: (
			<FormattedMessage
				id="homeBody.whatIDo.uIDevelopment"
				defaultMessage="UI Development"
			/>
		),
		content: (
			<FormattedMessage
				id="homeBody.whatIDo.uIDevelopment.text"
				defaultMessage="UI Devolpment text about me"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.whatIDo.webLayout"
				defaultMessage="User interface design"
			/>
		),
		content: (
			<FormattedMessage
				id="homeBody.whatIDo.webLayout.text"
				defaultMessage="Web layout text about me"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.whatIDo.responsiveDesign"
				defaultMessage="Web accessibility"
			/>
		),
		content: (
			<FormattedMessage
				id="homeBody.whatIDo.responsiveDesign.text"
				defaultMessage="Responsive Design text about me"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.whatIDo.performanceOptimization"
				defaultMessage="Frameworks and tools"
			/>
		),
		content: (
			<FormattedMessage
				id="homeBody.whatIDo.performanceOptimization.text"
				defaultMessage="Performance Optimization text about me"
			/>
		)
	},
	{
		title: (
			<FormattedMessage
				id="homeBody.whatIDo.upgrades"
				defaultMessage="Technological upgrades"
			/>
		),
		content: (
			<FormattedMessage
				id="homeBody.whatIDo.upgrades.text"
				defaultMessage="Technological upgrades text about me"
			/>
		)
	}
]

const mySocialNetworks = [
	{
		id: 's1',
		name: "Luis' Linkedin",
		link: 'https://www.linkedin.com/in/luis-daniel-torres-tomala-0aa5a7203/',
		icon: <AiFillLinkedin />
	},
	{
		id: 's2',
		name: "Luis' Github",
		link: 'https://github.com/LuisDTT',
		icon: <AiFillGithub />
	}
]

const mySkills: SkillsList = [
	{
		textColor: '#61dbfb',
		bgColor: '#fff',
		name: 'React',
		icon: <TbBrandReact />,
		borderColor: '#61dbfb'
	},
	{
		textColor: '#fff',
		bgColor: '#007ACC',
		name: 'TypeScript',
		icon: <TbBrandTypescript />
	},
	{
		textColor: '#000',
		bgColor: '#f7df1e',
		name: 'JavaScript',
		icon: <TbBrandJavascript />
	},
	{
		textColor: '#fff',
		bgColor: '#ff8000 ',
		name: 'HTML',
		icon: <TbBrandHtml5 />
	},
	{
		textColor: '#fff',
		bgColor: '#3b83bd  ',
		name: 'CSS',
		icon: <TbBrandCss3 />
	},
	{
		textColor: '#fff',
		bgColor: '#fc4b08  ',
		name: 'Git',
		icon: <TbBrandGit />
	}
]

const myKnowledges = [
	'Eslint / Prettier',
	<FormattedMessage
		id="resumeBody.knowledges.analyticalThinking"
		defaultMessage="Analytical thinking"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.flexibility"
		defaultMessage="flexibility"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.responsive"
		defaultMessage="Responsive Design"
	/>,
	'APIs',
	<FormattedMessage
		id="resumeBody.knowledges.selfLearning"
		defaultMessage="Self-learning"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.git"
		defaultMessage="Git / Github"
	/>,
	<FormattedMessage id="resumeBody.knowledges.agile" defaultMessage="Agile" />,
	<FormattedMessage id="resumeBody.knowledges.scrum" defaultMessage="Scrum" />,
	<FormattedMessage
		id="resumeBody.knowledges.teamwork"
		defaultMessage="Teamwork"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.leadership"
		defaultMessage="Leadership"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.organization"
		defaultMessage="Organization"
	/>,
	<FormattedMessage
		id="resumeBody.knowledges.innovation"
		defaultMessage="Innovation"
	/>
]

const myLanguages = [
	<FormattedMessage id="resumeBody.languages.es" defaultMessage="Spanish" />,
	<FormattedMessage id="resumeBody.languages.en" defaultMessage="English" />
]

export {
	Interests,
	WhatIDo,
	mySocialNetworks,
	mySkills,
	myKnowledges,
	myLanguages
}
