import { keyframes, styled } from 'styled-components'

const bgShadow = keyframes`


    0% {
    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
  }
`

export const BodyError = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.bg};
	height: 100vh;
	text-align: center;
	gap: 20px;
	h1 {
		color: ${({ theme }) => theme.colors.headline};
		margin-top: 20px;
		font-weight: 700;
	}
	p {
		color: ${({ theme }) => theme.colors.paragraph};
	}
`
export const ErrorContainer = styled.section`
	text-align: center;
	font-size: 106px;
	font-family: 'Lato', sans-serif;
	font-weight: 800;
	margin: 70px 15px;

	span {
		display: inline-block;
		position: relative;
		.screen-reader-text {
			position: absolute;
			top: -9999em;
			left: -9999em;
		}
	}

	span.four {
		width: 136px;
		height: 43px;
		border-radius: 999px;
		background: linear-gradient(
				140deg,
				rgba(0, 0, 0, 0.1) 0%,
				rgba(0, 0, 0, 0.07) 43%,
				transparent 44%,
				transparent 100%
			),
			linear-gradient(
				105deg,
				transparent 0%,
				transparent 40%,
				rgba(0, 0, 0, 0.06) 41%,
				rgba(0, 0, 0, 0.07) 76%,
				transparent 77%,
				transparent 100%
			),
			linear-gradient(
				to right,
				${({ theme }) => theme.colors.primary},
				${({ theme }) => theme.colors.secondary}
			);

		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			border-radius: 999px;
		}

		&::before {
			width: 43px;
			height: 156px;
			left: 60px;
			bottom: -43px;
			background: linear-gradient(
					128deg,
					rgba(0, 0, 0, 0.1) 0%,
					rgba(0, 0, 0, 0.07) 40%,
					transparent 41%,
					transparent 100%
				),
				linear-gradient(
					116deg,
					rgba(0, 0, 0, 0.1) 0%,
					rgba(0, 0, 0, 0.07) 50%,
					transparent 51%,
					transparent 100%
				),
				linear-gradient(
					to top,
					${({ theme }) => theme.colors.headline},
					//Done
					${({ theme }) => theme.colors.transparentColors.headline},
					${({ theme }) => theme.colors.transparentColors.secondary},
					${({ theme }) => theme.colors.primary},
					${({ theme }) => theme.colors.paragraph}
				);
		}
		&::after {
			width: 137px;
			height: 43px;
			transform: rotate(-49.5deg);
			left: -18px;
			bottom: 36px;
			background: linear-gradient(
				to right,
				${({ theme }) => theme.colors.headline},
				${({ theme }) => theme.colors.transparentColors.headline},
				${({ theme }) => theme.colors.transparentColors.secondary},
				${({ theme }) => theme.colors.primary},
				${({ theme }) => theme.colors.paragraph}
			);
		}
	}

	span.zero {
		vertical-align: text-top;
		width: 156px;
		height: 156px;
		border-radius: 999px;
		background: linear-gradient(
				-45deg,
				transparent 0%,
				rgba(0, 0, 0, 0.06) 50%,
				transparent 51%,
				transparent 100%
			),
			linear-gradient(
				to top right,
				${({ theme }) => theme.colors.headline},
				${({ theme }) => theme.colors.headline},
				${({ theme }) => theme.colors.transparentColors.headline},
				${({ theme }) => theme.colors.transparentColors.headline},
				${({ theme }) => theme.colors.transparentColors.secondary},
				${({ theme }) => theme.colors.primary},
				${({ theme }) => theme.colors.paragraph}
			);
		overflow: hidden;
		animation: ${bgShadow} 5s infinite;

		&::before {
			content: '';
			display: block;
			position: absolute;
			transform: rotate(45deg);
			width: 90px;
			height: 90px;
			background-color: transparent;
			left: 0px;
			bottom: 0px;
			background: linear-gradient(
					95deg,
					transparent 0%,
					transparent 8%,
					rgba(0, 0, 0, 0.07) 9%,
					transparent 50%,
					transparent 100%
				),
				linear-gradient(
					85deg,
					transparent 0%,
					transparent 19%,
					rgba(0, 0, 0, 0.05) 20%,
					rgba(0, 0, 0, 0.07) 91%,
					transparent 92%,
					transparent 100%
				);
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			border-radius: 999px;
			width: 70px;
			height: 70px;
			left: 43px;
			bottom: 43px;
			background: ${({ theme }) => theme.colors.bg};
			box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
		}
	}
`
