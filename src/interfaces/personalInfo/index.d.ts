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

export interface Certificate {
	imageUrl: string
	date: string
	college: string
	name: JSX.Element | string
	collegeImage: string
	collegeUrl: string
}

type SkillsList = Array<Skills>

type DataList = Array<DataObject>

type CertificateList = Array<Certificate>
