import { styled } from 'styled-components'

export const CertificateStyles = styled.div`
	position: absolute;
	max-height: 95vh;
	max-width: 800px;
	box-sizing: border-box;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0px 0px 32px -1px ${({ theme }) => theme.colors.transparentColors.headline};
	@media screen and (max-width: 720px) {
		width: 80%;
	}

	img {
		border: 1px solid white;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
	}
`
