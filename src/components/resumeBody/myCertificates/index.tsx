import { CertificateList } from '../../../interfaces/personalInfo'
import { FormattedMessage } from 'react-intl'
import SectionDiv from '../../utilsComponents/SectionDiv'
import { CertificatesStyles } from './styles/CertificatesStyles'
import { CertificateBox } from './CertificateBox'
import { Modal } from '@mui/material'
import { Certificate } from './Certificate'
import { useState } from 'react'

interface Props {
	certificateList: CertificateList
}

export const Certificates = ({ certificateList }: Props) => {
	const [modal, setModal] = useState({
		open: false,
		modalImage: ''
	})

	const handleClose = () => {
		setModal({ ...modal, open: false })
	}

	const handleClick = (certificateUrl: string) => {
		console.log(certificateUrl)
		setModal({ open: true, modalImage: certificateUrl })
	}

	return (
		<SectionDiv
			title={
				<FormattedMessage
					id="resumeBody.certificates"
					defaultMessage={'Certificates'}
				/>
			}
		>
			<>
				<CertificatesStyles>
					{certificateList.map((certificate) => (
						<CertificateBox
							certificateImage={certificate.imageUrl}
							urlCollege={certificate.collegeUrl}
							certificateDate={certificate.date}
							college={certificate.college}
							certificateName={certificate.name}
							bgImage={certificate.collegeImage}
							handleClick={handleClick}
							key={certificate.imageUrl}
						/>
					))}
				</CertificatesStyles>
				<Modal open={modal.open} onClose={handleClose}>
					<>
						<Certificate imgURL={modal.modalImage} />
					</>
				</Modal>
			</>
		</SectionDiv>
	)
}
