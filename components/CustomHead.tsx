import Head from 'next/head'

interface CustomHeadTypes {
  title: string
  description: string
  keywords: string
}

const CustomHead = ({ title, description, keywords }: CustomHeadTypes) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  )
}

export default CustomHead
