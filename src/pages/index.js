import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, OpenProjects } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />

		<Skills />
		<Projects />
		<OpenProjects />

		<Contact />
	</Layout>
)
