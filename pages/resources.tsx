import React from 'react'
import { resourcesData } from 'data/resourcesData'
import ResourcesTemplate from 'components/Resources/Resources'

const resources = () => {
  return <ResourcesTemplate {...resourcesData} />
}

export default resources
