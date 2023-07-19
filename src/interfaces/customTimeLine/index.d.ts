interface Content {
	heading: string | JSX.Element
	paragraph: string | JSX.Element
}

export type TimelineData = Array<{
	leftContent: Content
	rightContent: Content
}>
