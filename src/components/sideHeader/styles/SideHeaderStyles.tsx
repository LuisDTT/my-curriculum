import { keyframes, styled } from 'styled-components'
import bgImage from '../../../assets/images/headBackgroundImage.png'

const scaleInHorLeft = keyframes`
	
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  
}

`
const scaleOutHorLeft = keyframes`

  0% {
    transform: scaleX(1);
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    transform-origin: 0 0;
    opacity: 1;
  }


`

interface HeaderStylesProps {
	readonly $showHeader: boolean
}

export const HeaderStyles = styled.header<HeaderStylesProps>`
	/* position: sticky; */
	width: 100%;
	min-height: 700px;
	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-position: 70% 50%;
	background-attachment: local;
	display: flex;
	justify-content: center;
	height: 100vh;
	position: sticky;
	top: 0;
	left: 0;
	overflow-y: auto;
	z-index: 20;

	@media screen and (max-width: 720px) {
		position: fixed; //
		bottom: 0; //
		z-index: 30;
		animation: ${({ $showHeader }) =>
				$showHeader ? scaleInHorLeft : scaleOutHorLeft}
			0.05s both;
	}
	.bg {
		background-color: ${({ theme }) => theme.colors.transparentColors.primary};
		height: 100%;
		width: 100%;
		color: ${({ theme }) => theme.colors.bg};
	}
	.main-header {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		position: relative;
		@media screen and (min-width: 720px) and (max-width: 1565px) {
			justify-content: center;
		}
		&__top {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: ${({ theme }) => {
				return theme.colors.white
			}};
			h4 {
				margin-bottom: 8px;
				text-transform: uppercase;
			}
			h5 {
				margin: 0 0 20px 0;
			}
		}
	}
`

export const ProfileStyles = styled.div`
	background-color: transparent;
	border: 5px solid ${({ theme }) => theme.colors.white};
	border-radius: 50%;
	height: 120px;
	width: 120px;
	overflow: hidden;
	padding: 3px;
	box-shadow: 10px 10px 19px -15px ${({ theme }) => theme.colors.white};
	margin-bottom: 20px;
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
`
