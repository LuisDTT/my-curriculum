import { AboutSectionStyles } from './styles/AboutSectionStyles'
import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { Typewriter } from 'react-simple-typewriter'
import { LangContext } from '../../context/LangContext'

export const AboutSection = () => {
	const { lang } = useContext(LangContext)
	return (
		<AboutSectionStyles>
			<Typography variant="h2" component={'h1'}>
				<FormattedMessage
					id="homeBody.h1"
					defaultMessage="Hi, I am Luis Torres"
				/>
				<Typewriter
					words={[
						'Luis Torres',
						lang === 'es-MX'
							? 'desarrollador en React...'
							: 'React Developer...'
					]}
					delaySpeed={9900}
					typeSpeed={65}
					deleteSpeed={25}
					loop
					cursor
					cursorStyle={'_'}
				/>
			</Typography>
			<Typography variant="body1" className="text">
				<FormattedMessage
					defaultMessage="This text is about me"
					id="homeBody.aboutMe"
				/>
			</Typography>
			<Button
				variant="contained"
				sx={(theme) => ({
					color: 'custom.buttonText',
					px: 5,
					py: 1.2,
					fontFamily: theme.typography.fontFamily
				})}
			>
				<Typography variant="button">
					<FormattedMessage id="homeBody.btn" defaultMessage={'Download CV'} />
				</Typography>
			</Button>
		</AboutSectionStyles>
	)
}
