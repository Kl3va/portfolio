import React from 'react'

//Data
import { projectData } from 'data/projectData'

//Components
import Projects from 'components/Projects/Projects'

const projectPage = () => {
  return <Projects {...projectData} />
}

export default projectPage
