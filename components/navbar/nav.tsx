import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/themeToggle'
import AuthLinks from '../authLinks/authLinks'
import image from '../../public/next.svg'
const nav = () => {
  return (
	  <div>
		  <nav className={styles.container} >
			  <div className={styles.social}>
				  <Image src={image}  alt="facebook" width={20} height={20} />
				  <Image src={image}  alt="instagram" width={20} height={20} />
				  <Image src={image}  alt="twitter" width={20} height={20} />
				  <Image src={image}  alt="youtube" width={20} height={20} />
				  
			  </div>
			  <div className={styles.logo}>
				  Nawalblogs
			  </div>
			  <div className={styles.links}>
				  <ThemeToggle/>
				  <Link href="/" className={styles.link}>Home</Link>
				 
				  <Link href="/contact" className={styles.link}>Contact</Link>
				  <Link href="/about" className={styles.link}>About</Link>
				 <AuthLinks/>
				  
			 </div>
			  	</nav>
		  
	</div>
  )
}

export default nav