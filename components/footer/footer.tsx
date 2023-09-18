import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import image from '../../public/next.svg'
import Link from 'next/link'
const footer = () => {
	return (

		<footer className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src={image} alt="logo" width={50} height={50}></Image>
					<h1 className={styles.logoText}>Blogs</h1>
				</div>
				<p className={styles.desc}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam dolorem alias labore deserunt, blanditiis odit ipsum quaerat animi doloremque!
				</p>
				<div className={styles.icons}>
					<Image src={image} alt='' height={18} width={18}></Image>
					<Image src={image} alt='' height={18} width={18}></Image>
					<Image src={image} alt='' height={18} width={18}></Image>
					<Image src={image} alt='' height={18} width={18}></Image>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Home Page</Link>
					<Link href="/">Blog Page</Link>
					<Link href="/">About Page</Link>
					<Link href="/">Contact Page</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/">Style </Link>
					<Link href="/">Fashion </Link>
					<Link href="/">Coding </Link>
					<Link href="/">Travel </Link>
				</div>

				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Facebook </Link>
					<Link href="/">Instagram </Link>
					<Link href="/">Twitter </Link>
					<Link href="/">Youtube </Link>
				</div>
			</div>
		</footer>

	)
}

export default footer