import { Outlet } from 'react-router-dom'
import { Header } from '../components/sideHeader/Header'
import { ContainerStyles } from './styles/ContainerStyles'
import { Suspense } from 'react'
import { BodyContainer } from '../components/BodyContainer'
import Loading from '../components/utilsComponents/Loading'

export const Root = () => {
	return (
		<ContainerStyles>
			<Header />
			<BodyContainer>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</ContainerStyles>
	)
}
