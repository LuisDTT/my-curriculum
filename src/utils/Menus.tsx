import { IoBriefcaseSharp } from 'react-icons/io5'
import { MdPermContactCalendar } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'

export const Menus = [
	{
		name: <FormattedMessage defaultMessage="Home" id="sideHeader.menu.home" />,
		icon: <FaUserTie />,
		pathName: '/'
	},
	{
		name: (
			<FormattedMessage defaultMessage="Resume" id="sideHeader.menu.resume" />
		),
		icon: <FaUserGraduate />,
		pathName: '/resume'
	},
	{
		name: (
			<FormattedMessage
				defaultMessage="Portfolio"
				id="sideHeader.menu.portfolio"
			/>
		),
		icon: <IoBriefcaseSharp />,
		pathName: '/portfolio'
	},
	{
		name: (
			<FormattedMessage defaultMessage="Contact" id="sideHeader.menu.contact" />
		),
		icon: <MdPermContactCalendar />,
		pathName: '/contact'
	}
]
