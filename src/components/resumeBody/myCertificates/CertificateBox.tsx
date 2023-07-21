import { Typography } from '@mui/material'
import { CertificateBoxStyles } from './styles/CertificateBoxStyles'

interface Props {
	college: JSX.Element | string
	certificateName: JSX.Element | string
	certificateDate: JSX.Element | string
	bgImage?: string
	urlCollege: string
	handleClick: (certificateImage: string) => void
	certificateImage: string
}

export const CertificateBox = ({
	college,
	certificateName,
	certificateDate,
	bgImage,
	urlCollege,
	handleClick,
	certificateImage
}: Props) => {
	return (
		<CertificateBoxStyles $bgImage={bgImage}>
			<Typography variant="h6" component="p" className="box left-box">
				<a className="text" href={urlCollege} target="__blank">
					{college}
				</a>
				{bgImage && <span className="bgImage"></span>}
			</Typography>
			<p
				className="box right-box"
				onClick={() => handleClick(certificateImage)}
			>
				<Typography variant="h6" component="span" className="header-text">
					{certificateName}
				</Typography>
				<Typography variant="body1" component="span" className="date-text">
					{certificateDate}
				</Typography>
			</p>
		</CertificateBoxStyles>
	)
}
