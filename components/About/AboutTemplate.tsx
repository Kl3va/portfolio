import React from 'react'

//Styling
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

const AboutTemplate = ({
  me,
  background,
  workedWith,
  note,
  fini,
}: AboutDataTypes) => {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.about_me}>
          <div>
            <h1>About Me</h1>
            <p>
              Hello! My name is Ikwunze Kelvin, I currently work as a Frontend
              Engineer for <a href='https://www.lunarstack.co/'>LunarStack</a>,
              specializing in the software developement & blockchain industry.
            </p>
          </div>

          <div>
            <h2>{me.title}</h2>
            <p>{me.text}</p>
          </div>

          <div>
            <h2>{background.title}</h2>
            <p>{background.text}</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>{workedWith.mainTitle}</h2>
          <div className={styles.skills_container}>
            {workedWith.skillsAndTools.map((tech, index) => {
              return (
                <ul key={index}>
                  <li>
                    {tech.title}
                    <ul className={styles.subList}>
                      {tech.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                      })}
                    </ul>
                  </li>
                </ul>
              )
            })}
          </div>
          <div>
            <h3>{workedWith.familiar.title}</h3>
            <p>{workedWith.familiar.skills.join(', ')}</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          <p className={styles.message}>{fini}</p>
        </div>
      </section>
    </main>
  )
}

export default AboutTemplate
