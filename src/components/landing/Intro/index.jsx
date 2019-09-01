import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import social from '../../theme/Footer/social'
import { Flex } from '../../theme/Footer/styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>I'm Poovarasan</h1>
				<h3>Full stack developer. Develops Application for web, mobile, desktop and embedded platform</h3>

				<Flex as={Container}>
					<div>
					</div>
					<div>
						{social.map(({ id, name, link, icon }) => (
							<a
								key={id}
								href={link}
								target="_blank"
								style={{ padding: 5 }}
								rel="noopener noreferrer"
								aria-label={`follow me on ${icon}`}
							>
								<img width="24" src={icon} alt={name}/>
							</a>
						))}
					</div>
				</Flex>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Poovarasan and I’m a Full stack developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
