import React from 'react'
import { resumeData } from 'data/resumeData'

type ResumeProps = typeof resumeData

const ResumeTemplate = ({ heading, title, subHeading, jobs }: ResumeProps) => {
  return (
    <main>
      <section>
        <div>
          <h1>{heading}</h1>
          <p>{title}</p>
        </div>

        <div>
          <h2>{subHeading}</h2>
          <div>
            {jobs.map((job, index) => {
              return (
                <div key={index}>
                  <h3>{job.company}</h3>
                  <div>
                    {job.board.map((about, jobIndex) => {
                      return (
                        <div key={jobIndex}>
                          <p>{about.label}</p>
                          <p>{about.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResumeTemplate
