import React from 'react'

//data
import { projectData } from 'data/projectData'

//Styling
import styles from 'components/Projects/projects.module.scss'

type ProjectProps = typeof projectData

const Projects = ({ heading, subTitle, extra, projects }: ProjectProps) => {
  return (
    <main className={styles.main}>
      <section className={styles.section__primary}>
        <div className={styles.container__primary}>
          <h1>{heading}</h1>
          <h2>{subTitle}</h2>
          <div className={styles.project__container}>
            {projects.map((project, index) => {
              return (
                <div key={index} className={styles.unique__project}>
                  <h3>{project.title}</h3>
                  <h4>{project.tools.join(' + ')}</h4>
                  <p>{project.subTitle}</p>
                  <div className={styles.links}>
                    <div>
                      <a href={project.links[0].url} target='_blank'>
                        <i className='fa-regular fa-eye'></i>
                      </a>
                      <p>{project.links[0].label}</p>
                    </div>
                    <div>
                      <a href={project.links[1].url} target='_blank'>
                        <i className='fa-solid fa-code-branch'></i>
                      </a>
                      <p>{project.links[1].label}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.section__secondary}>
        <div className={styles.container__secondary}>
          <h2>{extra.subHeading}</h2>
          <p>{extra.title}</p>
        </div>
      </section>
    </main>
  )
}

export default Projects
