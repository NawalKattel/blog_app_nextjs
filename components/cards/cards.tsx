import React from 'react'
import styles from './cards.module.css'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/vercel.svg'


const cards = () => {
  return (
	  <div className={styles.container}>
		  <div className={styles.ImageContainer}>
			  <Image className={styles.postImg}
				 src={image}  alt="postImage"  />
					</div>
					<div className={styles.textContainer}>
			  <div className={styles.details}>
				  <span className={styles.date}>11.02.2023 - </span>
				  <span className={styles.category}> CULTURE</span>
			  </div>
			  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, omnis!</h1>
			  <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat ullam perferendis id voluptatem officia temporibus facilis nesciunt voluptas expedita laborum a, voluptate ipsa adipisci dicta quia laboriosam quidem ipsum explicabo eveniet? Delectus dolore accusamus voluptatum minima nihil cumque est rem facilis ducimus dignissimos! Debitis libero odio nulla hic nam!</p>
			  <Link className={styles.link} href='/' >Read more</Link>
					</div>
	</div>
  )
}

export default cards