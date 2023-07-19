import { Typography } from '@mui/material'
import { ProjectCardStyles } from './styles/ProjectCardStyles'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

interface Props {
	projectImage: string
	projectType?: string | JSX.Element
	projectName: string | JSX.Element
	id: string
}

export const ProjectCard = ({
	projectImage,
	projectName,
	projectType,
	id
}: Props) => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<ProjectCardStyles
			$imageUrl={projectImage}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			$hover={isHovering}
		>
			<Link to={`/portfolio/${id}`}>
				<span className="hover-contain">
					{projectType && (
						<Typography
							variant="overline"
							component="span"
							className="top-text"
						>
							{projectType}
						</Typography>
					)}
					<span className="bottom-text">
						<Typography variant="subtitle1" component="p">
							<span>{projectName}</span>
							<FormattedMessage
								id="portfolioBody.project"
								defaultMessage="Project"
							/>
						</Typography>
					</span>
				</span>
			</Link>
		</ProjectCardStyles>
	)
}
