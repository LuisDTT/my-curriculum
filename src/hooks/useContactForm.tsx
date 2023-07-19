import { useState } from 'react'
import { validateName } from '../validations/nameValidation'
import { validateEmail } from '../validations/emailValidation'
import { validateMessage } from '../validations/messageValidation'
import axios from 'axios'

const INITIAL_STATE = {
	formData: {
		name: '',
		email: '',
		message: ''
	},
	formErrors: {
		name: {
			error: false,
			errorMsg: ''
		},
		email: {
			error: false,
			errorMsg: ''
		},
		message: {
			error: false,
			errorMsg: ''
		}
	}
}

export const useContactForm = (fetchResponse: (response: boolean) => void) => {
	const [formData, setFormData] = useState(INITIAL_STATE['formData'])
	const [formErrors, setFormErrors] = useState<{
		name: {
			error: boolean
			errorMsg: string | JSX.Element
		} | null
		email: {
			error: boolean
			errorMsg: string | JSX.Element
		} | null
		message: {
			error: boolean
			errorMsg: string | JSX.Element
		} | null
	}>(INITIAL_STATE['formErrors'])

	const [load, setLoad] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleBlur = () => {
		const fieldName = () => {
			setFormErrors({
				...formErrors,
				name: validateName(formData.name)
			})
		}

		const fieldEmail = () => {
			setFormErrors({
				...formErrors,
				email: validateEmail(formData.email)
			})
		}

		const fieldMessage = () => {
			setFormErrors({
				...formErrors,
				message: validateMessage(formData.message)
			})
		}

		return { fieldName, fieldEmail, fieldMessage }
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const { email, message, name } = formErrors

		e.preventDefault()

		setFormErrors({
			name: validateName(formData.name),
			email: validateEmail(formData.email),
			message: validateMessage(formData.message)
		})

		if (email === null && name === null && message === null) {
			setLoad(true)
			axios({
				method: 'post',
				url: 'https://formspree.io/f/meqboevv',
				data: formData
			})
				.then((response) => {
					setLoad(false)
					fetchResponse(response.data.ok)
					setFormData(INITIAL_STATE['formData'])
					setTimeout(() => {
						fetchResponse(false)
					}, 8000)
				})
				.catch((error) => console.log(error))
		}
	}

	return {
		handleChange,
		formData,
		formErrors,
		handleBlur,
		handleSubmit,
		load
	}
}
