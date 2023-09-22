import React from 'react'
import CustomHead from 'components/CustomHead'
import { resourcesMetaData } from 'seo/resourcesMetaData'
import { resourcesData } from 'data/resourcesData'
import ResourcesTemplate from 'components/Resources/Resources'

const resources = () => {
  return (
    <>
    <CustomHead {...resourcesMetaData}/>
      <ResourcesTemplate {...resourcesData} />
    </>
  )
}

export default resources
