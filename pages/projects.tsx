import React from 'react'
import { projectData } from 'data/projectData'
import Projects from 'components/Projects/Projects'

const projectPage = () => {
  return <Projects {...projectData} />
}

export default projectPage
