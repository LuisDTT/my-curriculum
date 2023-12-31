import { keyframes, styled } from 'styled-components'

const slideTop = keyframes`

  0% {
    transform: translateY(-33px);
	opacity: .3;
  }
  100% {
    transform: translateY(-55px);
	opacity: 1;
  }

	
`

export const NavStyles = styled.nav`
	width: 100%;
	margin-top: 20px;
	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0 20px;
		padding: 0;
		gap: 5px;

		@media screen and (min-width: 720px) and (max-width: 1565px) {
			gap: 20px;
			height: 180px;
		}
		li {
			width: 22%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			@media screen and (max-width: 320px) {
				/* margin-bottom: 50px; */
			}
			a {
				font-family: ${({ theme }) => theme.typography.fontFamily};
				color: ${({ theme }) => theme.colors.white};
				background-color: ${({ theme }) => theme.colors.primary};
				font-size: 26px;
				border-radius: 50%;
				height: 55px;
				width: 55px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				transition: background-color 0.15s ease-in-out;
				&:hover {
					opacity: 0.7;
				}
				&:active {
					opacity: 1;
					background-color: ${({ theme }) =>
						theme.colors.transparentColors.shadowColor};
					color: ${({ theme }) => theme.colors.bg};
				}
				.icon {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			.active {
				color: ${({ theme }) => theme.colors.bg};
				background-color: ${({ theme }) => theme.colors.headline};
				.show-label {
					display: flex;
					animation: ${slideTop} 0.3s both;
				}
			}
		}
	}
`

export const LabelStyles = styled.span`
	background-color: ${({ theme }) => theme.colors.transparentColors.headline};
	text-transform: uppercase;
	position: absolute;
	font-size: 12px;
	width: 90px;
	border-radius: 10px;
	padding: 5px 1.5px;
	display: none;
	justify-content: center;
	.arrow {
		display: block;
		position: absolute;
		top: 23.8px;
		background-color: ${({ theme }) => theme.colors.transparentColors.headline};
		width: 14px;
		height: 11px;
		clip-path: polygon(50% 100%, 0 0, 100% 0);
	}
`
