import { FormattedMessage } from 'react-intl'
import SectionDiv from '../../utilsComponents/SectionDiv'
import { CertificateStyles } from './styles/CertificateStyles'
import { CertificateBox } from './CertificateBox'
import senaImage from '../../../assets/images/colleges/sena.png'
import oneImage from '../../../assets/images/colleges/one.png'

export const Certificates = () => {
	return (
		<SectionDiv
			title={
				<FormattedMessage
					id="resumeBody.certificates"
					defaultMessage={'Certificates'}
				/>
			}
		>
			<CertificateStyles>
				<CertificateBox
					certificateDate={'28.08.2022'}
					college={'SENA'}
					certificateName={
						<FormattedMessage id="resumeBody.education.technician" />
					}
					bgImage={senaImage}
					urlCollege="https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx"
				/>
				<CertificateBox
					urlCollege="https://www.oracle.com/co/education/oracle-next-education/"
					certificateDate={'06.06.2022'}
					college={'ONE'}
					certificateName={'Oracle Next Education F2 T4 Front-end '}
					bgImage={oneImage}
				/>
				<CertificateBox
					urlCollege="https://www.oracle.com/co/education/oracle-next-education/"
					certificateDate={'06.06.2022'}
					college={'ONE'}
					certificateName={'React'}
					bgImage={oneImage}
				/>
				<CertificateBox
					urlCollege="https://www.oracle.com/co/education/oracle-next-education/"
					certificateDate={'19.05.2022'}
					college={'ONE'}
					certificateName={'Business Agility'}
					bgImage={oneImage}
				/>
			</CertificateStyles>
		</SectionDiv>
	)
}
