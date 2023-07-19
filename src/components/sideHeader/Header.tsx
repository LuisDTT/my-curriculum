import { useState } from 'react'
import { ToggleMenu } from './MenuToggle'
import { SideHeader } from './SideHeader'

interface Props {
	fixBackground: (isVisible: boolean) => void
}

export const Header = ({ fixBackground }: Props) => {
	const [showHeader, setShowHeader] = useState(false)

	const menuToggle = () => {
		setShowHeader(!showHeader)
		fixBackground(!showHeader)
	}

	return (
		<>
			<SideHeader showHeader={showHeader} menuToggle={menuToggle} />
			<ToggleMenu isActive={showHeader} menuToggle={menuToggle} />
		</>
	)
}
