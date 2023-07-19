import { keyframes, styled } from 'styled-components'
import squaresIllustration from '../../../assets/images/squaresIllustration.png'
import moonIllustration from '../../../assets/images/moonIllustration.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const scaleOutTr = keyframes`


  0% {
    transform: scale(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }

`

const scaleInTr = keyframes`


  0% {
    transform: scale(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }


`

const heartbeat = keyframes`

  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.98);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.99);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.97);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }


`

export const IllustrationStyle = styled.div`
	width: 500px;
	height: 500px;
	position: fixed;
	right: 0;
	top: 0;
	overflow: hidden;
	z-index: -1;

	@media screen and (max-width: 365px) {
		display: none;
	}

	@media screen and (max-width: 785px) {
		/* left: 0; */
	}

	@media screen and (max-width: 1420px) {
		opacity: 0.5;
	}

	@media screen and (max-width: 1220px) {
		opacity: 0.1;
	}

	.illustration {
		width: 100%;
		height: 100%;
		position: absolute;
		&-moon {
			top: -220px;
			right: -220px;
		}

		&-squares {
			top: 8%;
			left: 35%;
		}

		.moon,
		.squares {
			display: block;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-attachment: scroll;
		}
		.moon {
			background-image: url(${moonIllustration});
			&-loop {
				animation: ${rotate} 290s linear infinite;
			}
		}
		.squares {
			background-image: url(${squaresIllustration});
			&-loop {
				animation: ${heartbeat} 8s ease-in-out infinite;
			}
		}
	}
	.moon-enter,
	.squares-enter {
		animation: ${scaleInTr} 0.2s both;
	}
	.moon-leave,
	.squares-leave {
		animation: ${scaleOutTr} 0.1s both;
	}
`
