import { TimelineData } from '../../interfaces/customTimeLine'
import { SectionDiv } from '../utilsComponents/SectionDiv'
import { CustomTimeline } from './customTimeline/CustomTimeline'
import { LeftContent, RightContent } from './customTimeline/TimelineContentText'

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
					heading={rightContent.heading}
					text={rightContent.paragraph}
				/>
			),
			leftContent: (
				<LeftContent
					heading={leftContent.heading}
					text={leftContent.paragraph}
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
