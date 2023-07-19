import { FormattedMessage } from 'react-intl'

export const validateEmail = (value: string) => {
	let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (value.length === 0) {
		return {
			error: true,
			errorMsg: (
				<FormattedMessage
					id="validation.emptyField"
					defaultMessage="This field cannot be empty"
				/>
			)
		}
	}

	if (!regex.test(value)) {
		return {
			error: true,
			errorMsg: (
				<FormattedMessage
					id="contact.form.emailError"
					defaultMessage="Enter a valid email"
				/>
			)
		}
	}
	return null
}
