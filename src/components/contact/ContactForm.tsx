import { Box, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../../context/LangContext'
import { useContactForm } from '../../hooks/useContactForm'
import { LoadingButton } from '@mui/lab'

interface Props {
	fetchResponse: (response: boolean) => void
}

export const ContactForm = ({ fetchResponse }: Props) => {
	const { lang } = useContext(LangContext)

	const { formData, handleChange, formErrors, handleBlur, handleSubmit, load } =
		useContactForm(fetchResponse)

	return (
		<Box
			onSubmit={handleSubmit}
			component="form"
			autoComplete="off"
			sx={{
				marginTop: '5rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '30px'
			}}
		>
			<TextField
				variant="outlined"
				label={
					<FormattedMessage id="contact.form.name" defaultMessage="Name" />
				}
				id="name"
				name="name"
				placeholder={lang === 'en-US' ? 'Enter your name' : 'Ingrese su nombre'}
				value={formData.name}
				onChange={handleChange}
				error={formErrors.name?.error}
				helperText={formErrors.name?.errorMsg}
				onBlur={handleBlur().fieldName}
				sx={(theme) => ({
					color: theme.palette.primary.main,
					'& label.Mui-focused': {
						color: 'custom.contrast'
					},
					'& .MuiOutlinedInput-root': {
						'&.Mui-focused fieldset': {
							borderColor: 'custom.contrast'
						}
					}
				})}
			/>
			<TextField
				variant="outlined"
				label="Email"
				id="email"
				name="email"
				placeholder={
					lang === 'en-US'
						? 'Enter your email'
						: 'Ingrese su correo electronico'
				}
				value={formData.email}
				onChange={handleChange}
				error={formErrors.email?.error}
				helperText={formErrors.email?.errorMsg}
				onBlur={handleBlur().fieldEmail}
				sx={(theme) => ({
					color: theme.palette.primary.main,
					'& label.Mui-focused': {
						color: 'custom.contrast'
					},
					'& .MuiOutlinedInput-root': {
						'&.Mui-focused fieldset': {
							borderColor: 'custom.contrast'
						}
					}
				})}
			/>
			<TextField
				variant="outlined"
				label={
					<FormattedMessage
						id="contact.form.message"
						defaultMessage="Message"
					/>
				}
				id="message"
				name="message"
				placeholder={lang === 'en-US' ? 'Your message' : 'Tu mensaje'}
				value={formData.message}
				onChange={handleChange}
				error={formErrors.message?.error}
				helperText={formErrors.message?.errorMsg}
				onBlur={handleBlur().fieldMessage}
				sx={(theme) => ({
					color: theme.palette.primary.main,
					'& label.Mui-focused': {
						color: 'custom.contrast'
					},
					'& .MuiOutlinedInput-root': {
						'&.Mui-focused fieldset': {
							borderColor: 'custom.contrast'
						}
					}
				})}
				multiline
				minRows={5}
			/>
			<LoadingButton
				loading={load}
				type="submit"
				variant="contained"
				sx={{
					width: '255px',
					alignSelf: 'center',
					height: '55px',
					color: '#ffffff'
				}}
			>
				<Typography variant="h6" component="span" fontWeight={700}>
					<FormattedMessage id="contact.form.send" defaultMessage="SEND" />
				</Typography>
			</LoadingButton>
		</Box>
	)
}
