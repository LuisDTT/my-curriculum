import { Typography } from '@mui/material'
import { ProjectCard } from '../components/portfolioBody/ProjectCard'
import SectionContainer from '../components/utilsComponents/SectionContainer'
import { PortfolioStyles } from './styles/PortfolioStyles'
import { FormattedMessage } from 'react-intl'
import { myProjects } from '../utils/personalInfo/myProjects'
import { Helmet } from 'react-helmet-async'

export const Portfolio = () => {
	return (
		<>
			<Helmet>
				<title>LT Portfolio</title>
			</Helmet>
			<SectionContainer
				header={{
					content: (
						<FormattedMessage
							id="portfolioBody.portfolio"
							defaultMessage="Portfolio"
						/>
					),
					tag: 'h5',
					defaultAccentStyle: true
				}}
			>
				<PortfolioStyles>
					<Typography variant="h6" component="span" className="subtitle">
						<FormattedMessage
							id="portfolioBody.personalProject"
							defaultMessage="Personal Project"
						/>
					</Typography>
					<div className="cards-container">
						{myProjects.map((project) => (
							<ProjectCard
								key={project.projectImg}
								projectImage={project.projectImg}
								projectName={project.projectName}
								projectType={project.projectType}
								id={project.id}
							/>
						))}
					</div>
				</PortfolioStyles>
			</SectionContainer>
		</>
	)
}

export default Portfolio
