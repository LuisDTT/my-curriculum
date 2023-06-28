import { TimelineData } from '../../interfaces/customTimeLine'
import { SectionDiv } from '../utilsComponents/SectionDiv'
import { CustomTimeline } from './customTimeline/CustomTimeline'
import { LeftContent, RightContent } from './customTimeline/TimelineContentText'
import { FormattedMessage } from 'react-intl'

interface Props {
	infoList: TimelineData
	header: string | JSX.Element
}

export default ({ infoList, header }: Props) => {
	const dataList = infoList.map((item) => {
		const { rightContent, leftContent } = item
		return {
			rightContent: (
				<RightContent
					heading={
						typeof rightContent.heading === 'string' ? (
							rightContent.heading
						) : (
							<FormattedMessage
								id={rightContent.heading.idText}
								defaultMessage={rightContent.heading.defaultText}
								values={rightContent.heading.value || {}}
							/>
						)
					}
					text={
						typeof rightContent.paragraph === 'string' ? (
							rightContent.paragraph
						) : (
							<FormattedMessage
								id={rightContent.paragraph.idText}
								defaultMessage={rightContent.paragraph.defaultText}
								values={rightContent.paragraph.value || {}}
							/>
						)
					}
				/>
			),
			leftContent: (
				<LeftContent
					heading={
						typeof leftContent.heading === 'string' ? (
							leftContent.heading
						) : (
							<FormattedMessage
								id={leftContent.heading.idText}
								defaultMessage={leftContent.heading.defaultText}
								values={leftContent.heading.value || {}}
							/>
						)
					}
					text={
						typeof leftContent.paragraph === 'string' ? (
							leftContent.paragraph
						) : (
							<FormattedMessage
								id={leftContent.paragraph.idText}
								defaultMessage={leftContent.paragraph.defaultText}
								values={leftContent.paragraph.value || {}}
							/>
						)
					}
				/>
			)
		}
	})

	return (
		<SectionDiv title={header}>
			<CustomTimeline data={dataList} />
		</SectionDiv>
	)
}
