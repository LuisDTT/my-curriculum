import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent, {
	timelineOppositeContentClasses
} from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'

interface Props {
	data: {
		leftContent: React.ReactNode | string
		rightContent: React.ReactNode | string
	}[]
}

export const CustomTimeline = ({ data }: Props) => {
	const reversedData = [...data].reverse()

	return (
		<Timeline
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2
				},
				padding: '6px 0'
			}}
		>
			{reversedData.map((item, index) => {
				return (
					<TimelineItem key={index}>
						<TimelineOppositeContent
							sx={{
								paddingLeft: 0
							}}
						>
							{item.leftContent}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								sx={(theme) => ({
									background: theme.palette.custom.primary,
									outline: '7px solid',
									padding: 0.9,
									outlineColor:
										theme.palette.custom.transparentColors.primary ||
										'transparent'
								})}
							/>
							<TimelineConnector
								sx={(theme) => ({
									background: theme.palette.secondary.main
								})}
							/>
						</TimelineSeparator>
						<TimelineContent>{item.rightContent}</TimelineContent>
					</TimelineItem>
				)
			})}
		</Timeline>
	)
}
