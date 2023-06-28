import { styled } from 'styled-components'

export const Container = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	gap: 10px;
	@media screen and (max-width: 720px) {
		right: 0;
		top: 2.5rem;
		left: 2.5rem;
		gap: 20px;
	}
	@media screen and (max-width: 420px) {
		right: 0;
		top: 1.5rem;
		left: 1.5rem;
	}
	button {
		width: 33px;
		height: 25px;
		border-style: none;
		background-color: transparent;
		padding: 0;
		transition: opacity 0.2s;
		opacity: 0.5;
		cursor: pointer;
		img {
			width: 25px;
			height: 15px;
		}
	}
	.en-US,
	.es-MX {
		opacity: 1;
		border-bottom: 2px solid #fff;
	}
`
