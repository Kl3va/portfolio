import React from 'react'
import { projectData } from 'data/projectData'

type ProjectProps = typeof projectData

const Projects = ({ heading, subTitle, extra, projects }: ProjectProps) => {
  return (
    <main>
      <section>
        <div>
          <h1>{heading}</h1>
          <h2>{subTitle}</h2>
          <div>
            {projects.map((project, index) => {
              return (
                <div key={index}>
                  <h3>{project.title}</h3>
                  <h4>{project.tools.join(' + ')}</h4>
                  <p>{project.subTitle}</p>
                  <div>
                    <div>
                      <a href={project.links[0].url}>
                        <i className='fa-regular fa-eye'></i>
                      </a>
                      <p>{project.links[0].label}</p>
                    </div>
                    <div>
                      <a href={project.links[1].url}>
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
      <section>
        <div>kjni</div>
      </section>
    </main>
  )
}

export default Projects
