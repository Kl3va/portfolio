import Head from 'next/head'
import { homeData } from 'data/homeData'

import CustomHead from 'components/CustomHead'
import { homeMetaData } from 'seo/homeMetaData'

//Components
import HomeTemplate from 'components/Home/HomeTemplate'

export default function Home() {
  return (
    <>
      <CustomHead {...homeMetaData}/>   
      <HomeTemplate {...homeData} />
    </>
  )
}
