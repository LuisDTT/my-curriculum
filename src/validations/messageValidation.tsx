import { FormattedMessage } from 'react-intl'

export const validateMessage = (value: string) => {
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
	} else if (value.length > 500) {
		return {
			error: true,
			errorMsg: (
				<FormattedMessage
					id="contact.form.messageError"
					defaultMessage="This field cannot exceed 500 characters"
				/>
			)
		}
	}
	return null
}
