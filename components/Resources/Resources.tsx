import React from 'react'
import parse from 'html-react-parser'
import { resourcesData } from 'data/resourcesData'

//Styling
import styles from 'components/Resources/resources.module.scss'

type ResourceProps = typeof resourcesData

const ResourcesTemplate = ({
  heading,
  mainText,
  extras,
  resources,
}: ResourceProps) => {
  return (
    <main>
      <section className={styles.section__main}>
        <div className={styles.container__main}>
          <div>
            <h1>{heading}</h1>
            <p>{mainText}</p>
          </div>
          <div>
            {resources.map((resource, index) => {
              return (
                <div key={index}>
                  <h2>{resource.heading}</h2>
                  {parse(resource.contents)}
                </div>
              )
            })}
          </div>
          <div>
            <h2>{extras.label}</h2>
            <p>{extras.content}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResourcesTemplate
