import { useState } from 'react'
import { ToggleMenu } from './MenuToggle'
import { SideHeader } from './SideHeader'

export const Header = () => {
	const [showHeader, setShowHeader] = useState(false)

	const menuToggle = () => {
		setShowHeader(!showHeader)
	}

	return (
		<>
			<SideHeader showHeader={showHeader} />
			<ToggleMenu isActive={showHeader} menuToggle={menuToggle} />
		</>
	)
}
