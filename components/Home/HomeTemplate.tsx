import React from 'react'
import Image, { StaticImageData } from 'next/image'

import styles from 'components/Home/home.module.scss'

interface HomeTemplateProps {
  photo: StaticImageData
  names: string
  role: string
  links: LogoTypes[]
}

interface LogoTypes {
  url: string
  logo: string
  label: string
}

const HomeTemplate = ({ photo, names, role, links }: HomeTemplateProps) => {
  return (
    <main className={styles.main}>
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
                <a href={link.url} aria-label={link.label} target='_blank'>
                  <i className={link.logo}></i>
                </a>
              </span>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default HomeTemplate
