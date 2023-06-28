import { mySocialNetworks } from '../../utils/PersonalInfo'
import { SocialNetworksStyles } from './styles/SocialNetworksStyles'

export const SocialNetworks = (): JSX.Element => {
	return (
		<SocialNetworksStyles>
			<ul>
				{mySocialNetworks.map((social) => {
					return (
						<li key={social.id}>
							<a href={social.link} target="__blank" title={social.name}>
								{social.icon}
							</a>
						</li>
					)
				})}
			</ul>
		</SocialNetworksStyles>
	)
}
