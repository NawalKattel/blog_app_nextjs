import React from 'react'
import styles from './featured.module.css'
import image from '../../public/next.svg'
import Image from 'next/image'
const Featured = () => {
  return (
	  <div className={styles.container}>
		  
		  <h1 className={styles.title}>
			  <b>Lorem ipsum dolor sit amet.</b> Lorem ipsum dolor sit amet.
			  </h1>
		  <div className={styles.post}>
			  <div className={styles.postImg}>
				  <Image className={styles.image} src={image} alt="postImage" fill></Image>
			  </div>
			  <div className={styles.postContainer}>
				  <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
				  <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, similique officia natus ea hic voluptate enim iure ullam ipsa vel facilis necessitatibus quae quibusdam autem doloremque asperiores quis recusandae non!
					  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore?
				  </p>
				  <button className={
					  styles.button
				  }>Read More</button>
				  </div>
			</div>

			  
	</div>
  )
}

export default Featured