import { Typography } from '@mui/material'
import { SectionContainer } from '../components/utilsComponents/SectionContainer'
import { ContactStyles } from './styles/ContactStyles'
import { FormattedMessage } from 'react-intl'
import { ContactBox } from '../components/contact/ContactBox'
import myInfo from '../utils/personalInfo/contact'
import { ContactForm } from '../components/contact/ContactForm'
import { useState } from 'react'
import { SuccessfulCard } from '../components/utilsComponents/SuccessfulCard'
import { Helmet } from 'react-helmet-async'

export const Contact = () => {
	const { address, mail, phone } = myInfo

	const [response, setResponse] = useState<boolean>()

	const fetchResponse = (response: boolean) => {
		setResponse(response)
	}

	return (
		<>
			<Helmet>
				<title>LT Contact</title>
			</Helmet>
			<SectionContainer
				header={{
					content: (
						<FormattedMessage
							id="contactBody.contact"
							defaultMessage="Contact"
						/>
					),
					tag: 'h5',
					defaultAccentStyle: true
				}}
			>
				<ContactStyles>
					<Typography variant="h6" component="span" className="subtitle">
						<FormattedMessage
							id="sideHeader.getInTouch"
							defaultMessage="Get in touch"
						/>
					</Typography>
					<div className="contact-info">
						<ContactBox icon={phone.icon} data={phone.number} />
						<ContactBox icon={address.icon} data={address.location} />
						<ContactBox icon={mail.icon} data={mail.email} />
					</div>
					{!response ? (
						<ContactForm fetchResponse={fetchResponse} />
					) : (
						<SuccessfulCard
							icon="✔"
							topText={
								<FormattedMessage
									id="contact.form.thanks"
									defaultMessage="Thanks for contact me"
								/>
							}
							bottomText={
								<FormattedMessage
									id="contact.form.responseInfo"
									defaultMessage="The information has been sent correctly"
								/>
							}
						></SuccessfulCard>
					)}
				</ContactStyles>
			</SectionContainer>
		</>
	)
}

export default Contact
