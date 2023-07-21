import { FormattedMessage } from 'react-intl'
import senaImage from '../../assets/images/colleges/sena.png'
import oneImage from '../../assets/images/colleges/one.png'
import TechnicianCertificate from '../../assets/images/myCertificates/softwareTechnician.png'
import frontendCertificate from '../../assets/images/myCertificates/frontend.png'
import { CertificateList } from '../../interfaces/personalInfo'
import businessAgilityCertificate from '../../assets/images/myCertificates/businessAgility.png'
import reactCertificate from '../../assets/images/myCertificates/react.png'

const SENA_URL = 'https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx'
const ONE_URL = 'https://www.oracle.com/co/education/oracle-next-education/'

export const myCertificates: CertificateList = [
	{
		imageUrl: TechnicianCertificate,
		date: '28.08.2022',
		college: 'SENA',
		name: <FormattedMessage id="resumeBody.education.technician" />,
		collegeImage: senaImage,
		collegeUrl: SENA_URL
	},
	{
		imageUrl: frontendCertificate,
		date: '06.06.2022',
		college: 'ONE',
		name: 'Oracle Next Education F2 T4 Front-end ',
		collegeImage: oneImage,
		collegeUrl: ONE_URL
	},
	{
		imageUrl: reactCertificate,
		date: '06.06.2022',
		college: 'ONE',
		name: 'React',
		collegeImage: oneImage,
		collegeUrl: ONE_URL
	},
	{
		imageUrl: businessAgilityCertificate,
		date: '19.05.2022',
		college: 'ONE',
		name: 'Business Agility',
		collegeImage: oneImage,
		collegeUrl: ONE_URL
	}
]
