import React from 'react'
import Link from 'next/link'
import { headerData } from 'data/headerData'
import styles from 'components/Header/header.module.scss'

const MenuList = () => {
  return (
    <aside className={styles.menulist}>
      <span>
        <i className='fa-solid fa-xmark'></i>
      </span>
      <div className={styles.menulinks}>
        {headerData.links.map((link, index) => {
          return (
            <span key={index}>
              <Link href={link.url}>
                {link.title} <i className='fa-solid fa-arrow-right'></i>
              </Link>
            </span>
          )
        })}
      </div>
      <div className={styles.contact_link}>
        <a href='mailto:ikwunzekelvin@gmail.com'>Contact Me</a>
      </div>
    </aside>
  )
}

export default MenuList
