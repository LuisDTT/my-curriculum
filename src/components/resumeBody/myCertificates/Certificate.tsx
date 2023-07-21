import { CertificateStyles } from './styles/CertificateStyles'

interface Props {
	imgURL: string
}

export const Certificate = ({ imgURL }: Props) => {
	return (
		<CertificateStyles>
			<img src={imgURL} alt="Certificate" />
		</CertificateStyles>
	)
}
