import {
	ContainerSkillsStyles,
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
import { Items } from '../utilsComponents/Items'

export const SkillsComponent = () => {
	return (
		<ContainerSkillsStyles>
			<SkillsSet
				title={
					<FormattedMessage id="resumeBody.skills" defaultMessage="Skills" />
				}
			>
				<Skills skillList={mySkills} />
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
	skillList: SkillsList
}

const Skills = ({ skillList }: SkillsProps) => {
	return (
		<SkillsStyles>
			{skillList.map((item, index) => (
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
