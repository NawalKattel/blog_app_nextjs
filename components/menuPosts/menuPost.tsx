import React from 'react';
import styles from './menuPost.module.css';
import Link from 'next/link';
import Image from 'next/image';
import image from '../../public/next.svg';

interface MenuPostProps {
  withImage: boolean;
}

const MenuPost: React.FC<MenuPostProps> = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src={image} alt="image" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Author: John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
		  </Link>
		  <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src={image} alt="image" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Author: John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
		  </Link>
		  <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src={image} alt="image" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Author: John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
		  </Link>
		  <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src={image} alt="image" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Author: John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
