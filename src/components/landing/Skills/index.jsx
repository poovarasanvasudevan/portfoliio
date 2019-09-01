import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'
import social from '../../theme/Footer/social'
import { Flex, Links } from '../../theme/Footer/styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Poovarasan and I’m a Full stack developer!"/>
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          8 years ago I started crafting electronic devices as a kid.<br/>I now have an engineering degree and 3+ years of
          work experience.Here are some of the projects I’ve been working on.
        </p>

        <Flex as={Container}>
          <ul>
            <li>Experience in developing large scale application</li>
            <li>Web, mobile, desktop and Embedded device</li>
            <li>Database design, frontend and Backed applications</li>
            <li>
              <span style={{color : '#d17759',fontWeight : 'bold'}}>
                Backend <br/>
                <ul className="m-sub" style={{color : '#000',fontWeight : 'normal'}}>
                  <li>Java, Node , Ruby, PHP, Go, Python</li>
                </ul>
              </span>
            </li>

            <li>
              <span style={{color : '#d7af4c',fontWeight : 'bold'}}>
                Web <br/>
                <ul className="m-sub" style={{color : '#000',fontWeight : 'normal'}}>
                  <li>Vue JS,React , AngularJS, Node</li>
                </ul>
              </span>
            </li>

            <li>
              <span style={{color : '#00c18a',fontWeight : 'bold'}}>
                Mobile <br/>
                <ul className="m-sub" style={{color : '#000',fontWeight : 'normal'}}>
                  <li>Kotlin, Rx, Dagger, Retrofit, React Native</li>
                </ul>
              </span>
            </li>


            <li>
              <span style={{color : '#00c18a',fontWeight : 'bold'}}>
                Embedded Device <br/>
                <ul className="m-sub" style={{color : '#000',fontWeight : 'normal'}}>
                  <li>Arduino, Rust, Assembly language(NASM,MASM)</li>
                </ul>
              </span>
            </li>
          </ul>
        </Flex>
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
    </SkillsWrapper>
  </Wrapper>
)
