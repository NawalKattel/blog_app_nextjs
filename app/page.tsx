



import styles from './home.module.css'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/categoryList'
import CardList from '@/components/cardList/cardList'
import Menu from '@/components/Menu/menu'
export default function Home() {
	return (

		<div className={styles.container}>
			<Featured />
			<CategoryList />
			<div className={styles.content}>
				<CardList />
				<Menu/>
			</div>
		</div>

	





	)
}
