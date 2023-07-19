import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { myProjects } from '../utils/personalInfo/myProjects'
import SectionContainer from '../components/utilsComponents/SectionContainer'
import {
	CustomAccentStyles,
	ProjectInfoStyles
} from './styles/ProjectInfoStyles'
import { FormattedMessage } from 'react-intl'
import { ErrorPage } from './ErrorPage'
import { BelowContainer } from '../components/portfolioBody/BelowContainer'
import { Slider } from '../components/portfolioBody/Slider'
import { Typography } from '@mui/material'
import SectionDiv from '../components/utilsComponents/SectionDiv'
import { Items } from '../components/utilsComponents/Items'

export const projectLoader = ({ params }: LoaderFunctionArgs) => {
	const projectId = params
	return projectId
}

export const ProjectInfo = () => {
	const { projectId } = useLoaderData() as ReturnType<typeof projectLoader>

	const project = myProjects.find((item) => item.id === projectId)

	return project ? (
		<SectionContainer
			header={{
				content: project.projectName || 'Project Name',
				tag: 'h6',
				customAccentStyle: (
					<CustomAccentStyles>
						<FormattedMessage
							id="portfolioBody.project"
							defaultMessage="Project"
						/>
					</CustomAccentStyles>
				)
			}}
		>
			<ProjectInfoStyles>
				<BelowContainer
					besideMessage={project.projectInfo.date}
					link={project.projectInfo.projectDomain}
					linkMessage={project.projectInfo.projectDomain}
				/>
				<Slider images={project.projectInfo.album} />
				<Typography variant="body1" className="project-paragraph">
					{project.projectInfo.text}
					{project.projectInfo.text2 && (
						<>
							<br />
							<br />
							{project.projectInfo.text2}
						</>
					)}
				</Typography>
				<SectionDiv
					title={
						<FormattedMessage
							id="portfolioBody.technologies"
							defaultMessage="Technologies"
						/>
					}
				>
					<Items itemList={project.projectInfo.technologies} />
				</SectionDiv>
			</ProjectInfoStyles>
		</SectionContainer>
	) : (
		<ErrorPage
			customError={{
				statusText: `${projectId} not found`,
				status: 'My Projects'
			}}
		/>
	)
}

export default ProjectInfo
