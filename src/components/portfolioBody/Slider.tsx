import { SliderStyles } from './styles/SliderStyles'

interface Props {
	images: string[]
}

export const Slider = ({ images }: Props) => {
	return (
		<SliderStyles>
			<ul>
				{images.map((item) => (
					<li key={item}>
						<img src={item} alt="" />
					</li>
				))}
			</ul>
		</SliderStyles>
	)
}
