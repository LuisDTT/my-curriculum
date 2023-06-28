import {
	ContainerSkillsStyles,
	ItemsStyles,
	SkillItemStyles,
	SkillsStyles
} from './styles/SkillsStyles'
import SkillsSet from '../utilsComponents/SectionDiv'
import Languages from '../utilsComponents/SectionDiv'
import Knowledges from '../utilsComponents/SectionDiv'
import { Typography } from '@mui/material'
import { SkillsList } from '../../interfaces/personalInfo'
import { myKnowledges, myLanguages, mySkills } from '../../utils/PersonalInfo'
import { FormattedMessage } from 'react-intl'

export const SkillsComponent = () => {
	return (
		<ContainerSkillsStyles>
			<SkillsSet
				title={
					<FormattedMessage id="resumeBody.skills" defaultMessage="Skills" />
				}
			>
				<Skills SkillList={mySkills} />
			</SkillsSet>

			<Knowledges
				title={
					<FormattedMessage
						id="resumeBody.knowledges"
						defaultMessage="Knowledges"
					/>
				}
			>
				<Items itemList={myKnowledges}></Items>
			</Knowledges>
			<Languages
				title={
					<FormattedMessage
						id="resumeBody.languages"
						defaultMessage="Languages"
					/>
				}
			>
				<Items itemList={myLanguages} />
			</Languages>
		</ContainerSkillsStyles>
	)
}

interface SkillsProps {
	SkillList: SkillsList
}

const Skills = ({ SkillList }: SkillsProps) => {
	return (
		<SkillsStyles>
			{SkillList.map((item, index) => (
				<SkillItemStyles
					$bgColor={item.bgColor}
					$textColor={item.textColor}
					$borderColor={item.borderColor}
					key={index}
				>
					<Typography variant="body1" component={'div'} className="skill-item">
						{item.name}
						<span className="skill-item-icon">{item.icon}</span>
					</Typography>
				</SkillItemStyles>
			))}
		</SkillsStyles>
	)
}

interface ItemsProps {
	itemList: (JSX.Element | string)[]
}
const Items = ({ itemList }: ItemsProps) => {
	return (
		<ItemsStyles>
			{itemList.map((item, index) => (
				<Typography key={index} variant="body1" component={'li'}>
					{item}
				</Typography>
			))}
		</ItemsStyles>
	)
}
