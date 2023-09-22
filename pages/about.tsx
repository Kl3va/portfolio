import React from 'react'
import { aboutMetaData } from 'seo/aboutMetaData'
import CustomHead from 'components/CustomHead'

//Component
import AboutTemplate from 'components/About/AboutTemplate'

//Data
import { aboutData } from 'data/aboutData'

const about = () => {
  return (
    <>
      <CustomHead {...aboutMetaData} />
      <AboutTemplate {...aboutData} />
    </>
  )
}

export default about
