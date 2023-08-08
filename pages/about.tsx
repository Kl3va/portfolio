import React from 'react'

//Component
import AboutTemplate from 'components/About/AboutTemplate'

//Data
import { aboutData } from 'data/aboutData'

const about = () => {
  return <AboutTemplate {...aboutData} />
}

export default about
