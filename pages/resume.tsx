import React from 'react'
import CustomHead from 'components/CustomHead'
import { resumeMetaData } from 'seo/resumeMetaData'
import ResumeTemplate from 'components/Resume/Resume'
import { resumeData } from 'data/resumeData'

const resume = () => {
  return (
    <>
      <CustomHead {...resumeMetaData} />
      <ResumeTemplate {...resumeData} />
    </>
  )
}

export default resume
