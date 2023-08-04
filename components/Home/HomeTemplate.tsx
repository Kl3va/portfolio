import React from 'react'

import styles from 'components/Home/home.module.scss'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <main className={styles.main}>
      {/* <About />
      <Others /> */}

      {/* <i className='fas fa-heart'></i>
      <i className='fa-brands fa-twitter'></i> */}
      <section className={styles.content}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  )
}

export default HomeTemplate
