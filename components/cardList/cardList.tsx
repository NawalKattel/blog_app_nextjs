import React from 'react'
import styles from './cardList.module.css'
import Image from 'next/image'
import Pagination from '../pagination/pagination'
import Cards from '../cards/cards'
const CardList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				<div className={styles.post}>
					<Cards />
					
					<Cards />
					<Cards />
					
				</div>

				</div>
			<Pagination />
		</div>
	)
}

export default CardList