import React from 'react'
import { resumeData } from 'data/resumeData'

//Styling
import styles from 'components/Resume/resume.module.scss'

type ResumeProps = typeof resumeData

const ResumeTemplate = ({ heading, title, subHeading, jobs }: ResumeProps) => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.resume_container}>
          <div>
            <h1>{heading}</h1>
            <p>{title}</p>
          </div>

          <div>
            <h2>{subHeading}</h2>
            <div className={styles.jobs_container}>
              {jobs.map((job, index) => {
                return (
                  <div key={index} className={styles.unique_job}>
                    <h3>{job.company}</h3>
                    <div className={styles.jobs_table}>
                      <div>{job.board.label}</div>
                      <div>{job.board.role}</div>
                      <div>{job.board.label2}</div>
                      <div>{job.board.timeline}</div>
                      <div>{job.board.label3}</div>
                      <div>{job.board.description}</div>
                    </div>
                    {job.role && (
                      <div>
                        <h4>{`${job.role?.label}:`}</h4>
                        <p>{job.role?.description}</p>
                      </div>
                    )}
                    {job.others?.map((other, otherIndex) => {
                      return (
                        <div key={otherIndex}>
                          <h4>{other.label}:</h4>
                          <ul className={styles.lists}>
                            {other.lists.map((list, listIndex) => (
                              <li key={listIndex}>{list}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResumeTemplate
