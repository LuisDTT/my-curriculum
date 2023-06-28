type TranslateContent = {
	idText: string
	defaultText: string
	value?: {}
}

interface Content {
	heading: string | TranslateContent
	paragraph: string | TranslateContent
}

export type TimelineData = Array<{
	leftContent: Content
	rightContent: Content
}>
