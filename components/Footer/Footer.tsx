import React from 'react'
import styles from 'components/Footer/footer.module.scss'

const footerData = {
  quote: 'Learn! Build! Repeat!',
  copyright: 'fa-regular fa-copyright',
  inspiration: {
    name: 'Ruan Bekker',
    url: 'https://ruan.dev',
    text: 'inspired by',
  },
  names: 'Ikwunze Kelvin',
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>{footerData.quote}</p>
      <p>
        <i className={footerData.copyright}></i>
        {`${currentYear} - ${footerData.names}. ${footerData.inspiration.text}`}
        <span>
          <a href={footerData.inspiration.url}>{footerData.inspiration.name}</a>
        </span>
      </p>
    </footer>
  )
}

export default Footer
