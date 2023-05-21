import Link from 'next/link'

import styles from 'styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content_wrapper}>
        <span>Kl3va&trade;</span>

        <Link href={`/KELVIN'S CV.pdf`}>Download CV</Link>
      </div>
    </header>
  )
}

export default Header
