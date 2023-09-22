import React from 'react'
import CustomHead from 'components/CustomHead'
import { projectsMetaData } from 'seo/projectsMetaData'

//Data
import { projectData } from 'data/projectData'

//Components
import Projects from 'components/Projects/Projects'

const projectPage = () => {
  return (
    <>
    <CustomHead {...projectsMetaData}/>
      <Projects {...projectData} />
    </>
  )
}

export default projectPage
