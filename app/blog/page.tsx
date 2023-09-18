import React from 'react'

import styles from './blogs.module.css'
import CardList from '@/components/cardList/cardList'
import Menu from '@/components/Menu/menu'
const Blogs = () => {
  return (
	  <div className={styles.container}>
		  <h1 className={styles.title}> Style Blogs</h1>
		  <div className={
			  styles.content
		  }>
			  <CardList />
			  <Menu/>
		  </div>
	</div>
  )
}

export default Blogs