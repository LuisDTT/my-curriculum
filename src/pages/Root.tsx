import { Outlet } from 'react-router-dom'
import { Header } from '../components/sideHeader/Header'
import { ContainerStyles } from './styles/ContainerStyles'
import { Suspense, useState } from 'react'
import { BodyContainer } from '../components/BodyContainer'
import Loading from '../components/utilsComponents/Loading'

export const Root = () => {
	const [contentPosition, setContentPosition] = useState<'fixed' | null>(null)

	const fixBackground = (isVisible: boolean) => {
		setContentPosition(isVisible ? 'fixed' : null)
	}
	return (
		<ContainerStyles $positionFixed={contentPosition}>
			<Header fixBackground={fixBackground} />
			<BodyContainer>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</ContainerStyles>
	)
}
