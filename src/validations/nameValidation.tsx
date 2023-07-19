import { FormattedMessage } from 'react-intl'

export const validateName = (value: string) => {
	let regex = /^[a-zA-Z\s]{3,49}$/

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
	} else if (!regex.test(value)) {
		return {
			error: true,
			errorMsg: (
				<FormattedMessage
					id="contact.form.nameError"
					defaultMessage="Invalid Name"
				/>
			)
		}
	}
	return null
}
