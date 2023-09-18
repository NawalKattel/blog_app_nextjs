"use client"

import Link from 'next/link'
import React from 'react'
import styles from './authLinks.module.css'
const AuthLinks = () => {
	  //temporary
	const status = "notLoggedIn"

	const [open, setOpen] = React.useState(false)
  return (
	  <>
		  {
			  status === "notLoggedIn" ? (
			
				  <Link href="/login" >Login</Link>
			  )
			 : (
			  <>
				  <Link href="/write" className={styles.line}>Write</Link>
				  <span className={styles.link} >Logout</span>
				  </>
			  
				  )}
		  <div className={styles.burger} onClick={()=>setOpen(!open)}>
			  <div className={styles.line}></div>
			  <div className={styles.line}></div>
			  <div className={styles.line}></div>
		  </div>
		  {
			  open && (
				  <div className={styles.menu}>
					  <Link href="/">Home</Link>
					  <Link href="/contact">Contact</Link>
					  <Link href="/about">About</Link>

					  {
			  status === "notLoggedIn" ? (
			
				  <Link href="/login">Login</Link>
			  )
			 : (
			  <>
				  <Link href="/write">Write</Link>
				  <span className={styles.link} >Logout</span>
				  </>
			  
				  )}
				  </div>
			  )
		  }
	  </>
  )
}

export default AuthLinks