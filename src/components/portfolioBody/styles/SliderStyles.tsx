import { styled } from 'styled-components'

export const SliderStyles = styled.div`
	margin-top: 20px;
	width: 100%;
	ul {
		list-style: none;
		display: flex;
		gap: 30px;
		margin: 0;
		padding: 0;
		overflow: auto;
		scrollbar-gutter: stable;
		padding: 20px 10px;
		scrollbar-color: ${({ theme }) =>
			`${theme.colors.transparentColors.headline} ${theme.colors.primary}`};
		li {
			border-radius: 20px;
			box-shadow: 0px 0px 10px 0px
				${({ theme }) => theme.colors.boxShadow.primary};
			overflow: hidden;
			min-width: 350px;
			max-height: 350px;
			@media screen and (min-width: 600px) {
				min-width: 500px;
			}
			@media screen and (min-width: 720px) and (max-width: 1000px) {
				min-width: 350px;
			}
			@media screen and (min-width: 1200px) {
				min-width: 600px;
			}
			@media screen and (min-width: 1800px) {
				min-width: 670px;
			}

			img {
				object-fit: contain;
				width: 100%;
				height: 100%;
			}
		}
	}
`
