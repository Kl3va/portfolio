import React from 'react'
import styles from 'components/Header/header.module.scss'
import { useCardStateContext } from 'hooks/context'

const Background = () => {
  const { handleMenuClose } = useCardStateContext()

  return <aside className={styles.background} onClick={handleMenuClose}></aside>
}

export default Background
