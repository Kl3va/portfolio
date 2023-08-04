import Link from 'next/link'

import styles from 'components/Header/header.module.scss'

interface HeaderDataTypes {
  logo: {
    img: string
    url: string
  }
  links: NavDataTypes[]
}

interface NavDataTypes {
  title: string
  url: string
}

const Header = ({ logo, links }: HeaderDataTypes) => {
  return (
    <header className={styles.header}>
      <div className={styles.content_wrapper}>
        <span className={styles.logo}>
          <Link href={logo.url}>{logo.img}&trade;</Link>
        </span>

        <nav className={styles.nav}>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
