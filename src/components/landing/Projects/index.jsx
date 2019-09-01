import React from 'react'
import { Container, Card } from 'Common'
import { Wrapper, Grid } from './styles'
import { Content, Item, Stats } from '../Projects/styles'
import starIcon from '../../../../static/icons/star.svg'
import forkIcon from '../../../../static/icons/fork.svg'
import ShowMoreText from 'react-show-more-text'
import styled from 'styled-components'

const TextTag = styled.span`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
  padding-bottom: 3px;
  
  border : 1px solid #0074d9;
  border-radius : 10px;
  
  font-size: 12px;
  margin-right : 5px;

  color : #000;
  
  
  &:hover {
    background : #0074d9;
    color : #fff;
  }
`

export const Projects = () => {

  const officialProjects = [{
    name: 'Service Focus Mobile',
    icon: 'images/sf.png',
    date: 'Sept 2018 - Now',
    screenshots: ['sfm1.PNG', 'sfm2.PNG', 'sfm3.PNG'],
    skills: ['Mobile', 'Web', 'Android', 'ios', 'Progressive Web'],
    description: 'Creating a Mobile Web App that allows Caretech Clients to interact with Remedy to manages their tickets, Vacation and other stuffs with their mobile devices',
    url: 'https://services.ctsmartdesk.com:8443/sfmobile',
  },
    {
      name: 'Carebot',
      date: 'June 2017 - Now',
      screenshots: ['bots.jpeg'],
      skills: ['Python',  'Tensorflow', 'Keras'],
      description: 'Building a machine Learning bot to ask enduser questions and gives the perfect replies, based on machine learning, We uses Tensorflow Seq2Seq to build an RNN Network with Keras',
      url : "https://github.com/poovarasanvasudevan/Tensorflow-Chatbot"
    },
    {
      name: 'Knowledge Base Article Search',
      date: 'May 2017 - Now',
      screenshots: ['search.png'],
      skills: ['Python',  'Tensorflow', 'Keras'],
      description: 'Building a Machine Learning Search Based on Tensorflow and Keras with LSTM Sequential Linear Network, That remembers past search results and calulates the waitage, and retrains the model to provide accurate search result',
    }, {
      name: 'Service Focus',

      date: 'Apr 2017 - Now',
      icon: 'images/sf.png',
      screenshots: ['ssrs.PNG', 'crq.PNG'],
      skills: ['Backend', 'Java', 'Springboot', 'LDAP', 'Remedy'],
      description: 'Service focus is an entry point for all other Application Such as Form builder , CTSSP , Chatbot , OTRS and Other Apllication , That Provide and take cares of Authentication of Other Application, It acts as an Entry point of Other Application Managing Local , Remedy , LDAP and OTRS',
    }, {
      name: 'MatchRX',

      icon: 'images/logo.png',
      date: 'Nov 2017 - Mar 2017',
      skills: ['Backend', 'Web', 'Lumen', 'Laravel'],
      screenshots: ['Selection_006.png'],
      url: "https://www.matchrx.com/",
      description: 'We are currently building a <b>new bank</b> for <b>small and medium businesses</b>, from scratch.<br/>I joined the team very early on and it’s the most exciting project I’ve ever been working on, our goal is very ambitious and all the team is very talented. <br/>We’re all working <b>full-stack</b>, from the product definition to the implementations, backend, web, salesforce and mobile.',
    }, {
      name: 'Caretech Self Service Portal Interface (CTSSPI)',
      icon: 'images/caretech.png',
      date: 'Oct 2017 - Now',
      skills: ['Ruby', 'Java'],
      screenshots: ['Selection_007.png'],
      description: 'I worked on two distinct subjects on the Kinetic Task Engine.<ul><li><b>In Workflow We connected Remedy with our Backend Code</b><li>We provided Dynamic Endpoint Creation for Accessing Remedy Forms</li><li>Implemented OAuth 2.0 Specs With Remedy Login Credentials</li><li>Connected LDAP and performing LDAP Queries</li></ul>.',
    }, {
      name: 'Kinetic Task Engine',

      icon: 'images/apps/Selection_007.png',
      date: 'Oct 2017 - Now',
      skills: ['Ruby', 'Java'],
      screenshots: ['Selection_007.png'],
      description: 'Kinetic Task Engine that runs on Ruby as a internal core Combined with JRuby as an abstraction with Java that connects ruby code to remedy to provide CRUD operation on Remedy Forms.',
    }, {
      name: 'Sahaj Vani',
      icon: 'images/sahajvani.webp',
      date: 'Mar 2017 - Oct 2017',
      screenshots: ['unnamed.webp', 'unnamed1.webp', 'unnamed2.webp', 'unnamed3.webp'],
      description: 'ADS App - This app is a personal library linked to Abhyasi Digital Store(ADS). Users can download all items purchased previously in ADS into their local devices and can download free content available in ADS into their devices. Those purchases are available for download any number of times. User can log in using mysrcm credentials and can link upto five devices with a single mysrcm account. This means, content purchased through a single mysrcm id can be downloaded and played in five different devices.',
      skills: ['IOS', 'Android'],
    }, {
      name: 'Sahaj Connect',
      icon: 'images/sahajconnect.webp',
      date: 'Mar 2017 - Oct 2017',
      screenshots: ['sahaj1.webp', 'sahaj2.webp', 'sahaj3.webp'],
      description: 'Let\'s Meditate is an innovative app that enables a Seeker to experience meditation with the help of a Meditation Trainer,Sahaj Marg meditation focuses on the heart, By tuning in to our heart, we learn to be centered and discover the unlimited resources that lie within As a Seeker, you can do a quick one-time registration and get access to a Trainer anytime no matter where you are! All you have to do is login and request for a meditation session. The app immediately connects you with an available Trainer who helps you meditate. You can also provide feedback to the Trainer regarding your session! , As a Trainer, you can provide meditation sessions to new seekers and existing practitioners as often as you like',
      skills: ['PHP', 'Android'],
      url: 'https://play.google.com/store/apps/details?id=com.letsmeditate&hl=en',
    }, {
      name: 'SHPT',
      icon: 'images/shpt.png',
      date: 'Aug 2016 - Oct 2017',
      skills: ['Design', 'Web', 'Backend', 'PHP'],
      screenshots: ['Selection_008.png', 'Selection_009.png'],
      description: 'SHPT is an Online store for Books CD DVD, and Other Heartfulness Products',
    }, {
      name: 'Phoenix',
      icon: 'images/guillotine.png',
      date: 'Mar 2016 - Aug 2016',
      skills: ['Ruby', 'Rails', 'MongoDB'],
      description: 'Billing Software used for Billing heartfulness products, It uses Rails as internal framework, with backend og MongoDB for document storage',
    }, {
      name: 'Heartfulness Magazines',
      icon: 'images/magazine.png',
      date: 'Dec 2015 - Mar 2017',
      skills: ['Java', 'Kotlin', 'Cassandra'],
      description: 'Heartfulness Magazine for Monthly and Yearly Subscription, Built with Spring Boot, Cassandra as internal data store',
      screenshots: ['Selection_010.png'],
      url: 'https://heartfulnessmagazine.shpt.in/subscribe',
    },
    {
      name: 'Abhiyasi Digital Store',
      icon: 'images/digital.png',
      date: 'Dec 2015 - Mar 2017',
      skills: ['Java', 'Kotlin', 'Postgres', 'Magento'],
      description: 'Online Store to Download Heartfulness Material , Audio, Video and many. ',
      screenshots: ['Selection_011.png'],
      url: 'https://www.shriramchandramission.org/digitalstore/',
    }, {
      name: 'ACS Insurance',
      icon: 'images/acs.png',
      date: 'Dec 2015 - May 2016',
      skills: ['C#', 'MVC 5', 'SQL Server'],
      description: 'ACS financial Insurance is the backend for user to register their Insurance detail, Subscribe for Notification, and many.',
    }, {
      name: 'ELS',
      icon: 'images/wso2.png',
      date: 'Dec 2015 - Jan 2016',
      skills: ['Java', 'WSO2'],
      description: 'Written a WSO2 wrapper that convert XML response to JSON and vice versa, from client server Communication from WEB to Wsot through ESB(Enterprise Service Bus).',
    }, {
      name: 'Global Archives',
      icon: 'images/gasbig.png',
      date: 'Apr 2015 - Dec 2015',
      skills: ['PHP', 'MySQL', 'Java Script'],
      screenshots: ['gassmall.PNG'],
      description: 'Asset Management System for Storing List of Available Books,CD,DVD,Tapes and more.',
    }]
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects I worked</h2>
      <Grid>

        {officialProjects.map((node) => (
          <Item
            key={node.name}
            as="a"
            href={node.url ? node.url : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <ShowMoreText
                  lines={3}
                  more='Show more'
                  less='Show less'
                  anchorClass=''
                  expanded={false}
                >
                  <p dangerouslySetInnerHTML={{ __html: node.description }}></p>

                </ShowMoreText>

              </Content>
              <div style={{ padding: 10, margin: 10 }}>
                {node.skills.map((data) => (
                  <TextTag>{data}</TextTag>
                ))}
              </div>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars"/>
                  <span>{node.date}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
