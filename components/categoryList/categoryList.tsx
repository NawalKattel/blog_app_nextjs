import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/next.svg'
const CategoryList = () => {
	return (
		<div className={styles.container} >
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				
					<Link href="/posts?cat=style" className={`${styles.category} ${styles.style}`}>
					<Image className={styles.categoryImg} src={image}  alt="ci" width={32}
						height={32} />
					style

				
				</Link>
				<Link href="/posts?cat=style" className={`${styles.category} ${styles.fashion}`}>
					<Image className={styles.categoryImg} src={image}  alt="ci" width={32}
						height={32} />
					fashion

				
				</Link>
				<Link href="/posts?cat=style" className={`${styles.category} ${styles.food}`}>
					<Image className={styles.categoryImg} src={image}  alt="ci" width={32}
						height={32} />
					food

				
				</Link>
				<Link href="/posts?cat=style" className={`${styles.category} ${styles.travel}`}>
					<Image className={styles.categoryImg} src={image}  alt="ci" width={32}
						height={32} />
					Travel

				
				</Link>
				<Link href="/posts" className={`${styles.category} ${styles.culture}`}>
					<Image className={styles.categoryImg} src={image} alt="ci" width={32}
						height={32} />
					culture

				
				</Link>
				<Link href="/coding" className={`${styles.category} ${styles.coding}`}>
					<Image className={styles.categoryImg} src={image}  alt="ci" width={32}
						height={32} />
					coding

				
				</Link>
				
			</div>

		</div>
	)
}

export default CategoryList