import React from 'react'

import styles from 'components/About/about.module.scss'

interface AboutDataTypes {
  me: AboutMeTypes
  background: AboutMeTypes
  workedWith: {
    mainTitle: string
    skillsAndTools: SkillsDataTypes[]
    familiar: SkillsDataTypes
  }
  note: AboutMeTypes
  fini: string
}

interface AboutMeTypes {
  title: string
  text: string
}

interface SkillsDataTypes {
  title: string
  skills: String[]
}

type Props = {}

const AboutTemplate = (props: AboutDataTypes) => {
  return (
    <main>
      <div className={styles.about_wrapper}>
        <h1>Hey, I'm Ikwunze Kelvin.</h1>
        <p>
          I'm a <span>frontend Developer</span> passionate about creating
          exceptional <span>user experiences</span>… With a keen{' '}
          <span>eye for detail</span>, I strive to deliver{' '}
          <span>pixel-perfect</span> user interfaces.
        </p>
      </div>
    </main>
  )
}

export default AboutTemplate
