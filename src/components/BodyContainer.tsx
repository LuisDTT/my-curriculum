import { ThemeSwitch } from './toggleButtons/ThemeSwitch'

interface Props {
	children: JSX.Element[] | JSX.Element
}

export const BodyContainer = ({ children }: Props) => {
	return (
		<main>
			<div className="body">
				<ThemeSwitch />
				{children}
			</div>
			<div className="bg-circles">
				<span className="purple-circle circle"></span>
				<span className="yellow-circle circle "></span>
			</div>
		</main>
	)
}
