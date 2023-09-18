import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../public/next.svg'
import MenuPost from '../menuPosts/menuPost'
import MenuCategory from '../menuCtegories/MenuCategory'
const Menu = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{"what's hot"}</h2>
			<h1 className={styles.subtitle}>Most Popular</h1>
			<MenuPost withImage={false} />
			
			<MenuCategory/>
		</div>
	)
}

export default Menu