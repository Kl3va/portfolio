import React from 'react'
import Image, { StaticImageData } from 'next/image'

import styles from 'components/Home/home.module.scss'

interface HomeTemplateProps {
  photo: StaticImageData
  names: string
  role: string
  quote: string
  copyright: string
  inspiration: {
    name: string
    url: string
    text: string
  }
  links: LogoTypes[]
}

interface LogoTypes {
  url: string
  logo: string
}

const HomeTemplate = ({
  photo,
  names,
  role,
  quote,
  copyright,
  inspiration,
  links,
}: HomeTemplateProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <main className={styles.main}>
      {/* <About />
      <Others /> */}

      {/* <i className='fas fa-heart'></i>
      <i className='fa-brands fa-twitter'></i> */}
      <section className={styles.content_section}>
        <div className={styles.content__wrapper}>
          <div className={styles.content__imgWrapper}>
            <Image
              src={photo}
              alt='profile-img'
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            />
          </div>

          <div className={styles.description}>
            <h1>{names}</h1>
            <h2>{role}</h2>
          </div>

          <div className={styles.links_container}>
            {links.map((link, index) => {
              return (
                <span key={index}>
                  <a href={link.url}>
                    <i className={link.logo}></i>
                  </a>
                </span>
              )
            })}
          </div>

          <div className={styles.footer}>
            <p>{quote}</p>
            <p>
              <i className={copyright}></i>
              {`${currentYear} - ${names}. ${inspiration.text}`}
              <span>
                <a href={inspiration.url}>{inspiration.name}</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeTemplate
