import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/menu'
import Image from 'next/image'
import image from '@/public/next.svg'
const SinglePage = () => {
  return (
	  <div className={styles.container}>
		  <div className={styles.infoContainer}>
			  
			  <div className={styles.textContainer}>
				  <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
				  <div className={styles.user}>
					  <div className={styles.avatar}>
						  <Image src={image} alt='' fill className={styles.image}></Image>
					  </div>
					  <div className={styles.userTextContainer}>
						  <span className={styles.username}>John Doe - </span>
						  <span className={styles.date}>12.12.2021</span>


						  </div>
				  </div>
			  </div>
			  <div className={styles.imageContainer}>
				  <Image src={image} alt='' fill className={styles.image}></Image>
			  </div>
		  </div>
		  <div className={styles.contentContainer}>
			  
			  <div className={styles.post}></div>
			  <Menu/>
			  </div>
	</div>
  )
}

export default SinglePage