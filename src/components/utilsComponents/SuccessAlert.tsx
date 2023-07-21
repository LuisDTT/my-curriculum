import { Slide, SlideProps, Snackbar } from '@mui/material'
import { forwardRef } from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />
})

interface Props {
	open: boolean
	handleClose: () => void
	message: React.ReactNode
}

export const SuccessAlert = ({ open, handleClose, message }: Props) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={10000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			TransitionComponent={SlideTransition}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="up" />
}
