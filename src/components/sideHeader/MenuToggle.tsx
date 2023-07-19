import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { Container } from './styles/MenuToggleStyles'
import { Button } from '@mui/material'

interface Props {
	menuToggle(): void
	isActive: boolean
}

export const ToggleMenu = ({ menuToggle, isActive }: Props) => {
	return (
		<Container position={isActive ? 'fixed' : 'absolute'}>
			<Button
				onClick={menuToggle}
				sx={(theme) => ({
					color: isActive ? '#fff' : theme.palette.primary.contrastText
				})}
				size={'large'}
				startIcon={!isActive ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
			>
				Menu
			</Button>
		</Container>
	)
}
