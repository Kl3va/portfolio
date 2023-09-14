import React from 'react'
import ResumeTemplate from 'components/Resume/Resume'
import { resumeData } from 'data/resumeData'

const resume = () => {
  return <ResumeTemplate {...resumeData} />
}

export default resume
