export interface DataObject {
	title: JSX.Element | string
	content?: JSX.Element | string
}

export interface Skills {
	textColor: string
	bgColor: string
	name: string
	icon: JSX.Element
	borderColor?: string
}

type SkillsList = Array<Skills>

type DataList = Array<DataObject>
