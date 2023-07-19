import { LabelStyles, NavStyles } from './styles/NavigationStyles'
import { Menus } from '../../utils/Menus'
import { NavLink } from 'react-router-dom'

export const Navigation = (): JSX.Element => {
	return (
		<NavStyles>
			<ul>
				{Menus.map((menu) => {
					return (
						<li key={menu.pathName} className="menu">
							<NavLink
								to={menu.pathName}
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								<LabelStyles className="show-label">
									{menu.name}
									<span className="arrow"></span>
								</LabelStyles>
								<span className="icon">{menu.icon}</span>
							</NavLink>
						</li>
					)
				})}
			</ul>
		</NavStyles>
	)
}
