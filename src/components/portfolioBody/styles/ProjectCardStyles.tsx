import { keyframes, styled } from 'styled-components'

interface Props {
	$imageUrl: string
	$hover?: boolean
}

const scaleUpBL = keyframes`

  0% {
    transform: scale(0.5);
    transform-origin: 0% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 100%;
  }


`

const slideLeft = keyframes`

  0% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(0px);
  }


`

const fadeIn = keyframes`

  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }



`

const slideOutbckcenter = keyframes`

  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1100px);
    opacity: 0;
  }


`

export const ProjectCardStyles = styled.div<Props>`
	height: 462px;
	min-width: 300px;
	border-radius: 12px;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) =>
		theme.colors.transparentColors.projectCardHover};
	background-image: url(${(props) => props.$imageUrl});
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	transition: scale 0.3s;
	&:hover {
		scale: 103%;
	}

	@media screen and (max-width: 800px) {
		height: 382px;
	}
	@media screen and (max-width: 500px) {
		height: 300px;
	}
	.hover-contain {
		animation: ${({ $hover }) => ($hover ? fadeIn : slideOutbckcenter)} 0.5s
			both;
		display: block;
		cursor: pointer;
		height: 100%;
		box-sizing: border-box;
		background-color: ${({ theme }) =>
			theme.colors.transparentColors.projectCardHover};
		color: ${({ theme }) => theme.colors.white};
		position: relative;

		.top-text {
			animation: ${({ $hover }) => ($hover ? slideLeft : slideOutbckcenter)}
				0.4s both;
			display: block;
			background-color: ${({ theme }) => theme.colors.primary};
			padding: 0px 12px;
			border-radius: 20px;
			position: absolute;
			top: 20px;
			right: 20px;
		}
		.bottom-text {
			animation: ${({ $hover }) => ($hover ? scaleUpBL : slideOutbckcenter)}
				0.4s both;
			position: absolute;
			left: 20px;
			bottom: 20px;
			height: 90%;
			width: 90%;
			display: flex;
			border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
			border-left: 1px solid ${({ theme }) => theme.colors.primary};
			p {
				align-self: flex-end;
				margin: 0;
				font-weight: 600;
				span {
					display: inline-block;
					padding: 10px 1px 0 40px;
					background-color: ${({ theme }) => theme.colors.primary};
					margin-right: 5px;
				}
			}
		}
	}
`
