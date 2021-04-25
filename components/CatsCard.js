
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Gallery.module.css'
import React, { useState } from "react";

export default function CatCard({ cat }) {
    const [value, functieOmValueAanTePassen] = useState(0);
    const { from, lie, slug, toys, types } = cat.fields
    //const [like, seLike] = useState(0);
    console.log(cat)
    return (
      
        <div className={styles.item}>
            <div className={styles.head}>
                <span className={styles.circle}></span>
                <p className={styles.from}>{from}</p>
            </div>

            {/*
            <div className={styles.image}>
                {<Image
                    src={'https:' + toys[0].fields.image[0].fields.file.url}
                    width="330px"
                    height={toys[0].fields.image[0].fields.file.details.image.height}
                />}
            </div>
           
            <div className={styles.image}>
                {<Image
                    src={'https:' + types[0].fields.image.fields.file.url}
                    width= "330px"
                    height="330px"
                />}
            </div>*/}
            <button className={styles.heart} /*disabled={like >= 1}*/ onClick={() => functieOmValueAanTePassen(value + 1)}> ❤ </button>
            <Link href={'/gallery/' + slug}>
                <div>
                    {<div className={styles.hearts}></div>}
                    <p className={styles.lie}>{value} likes</p>
                    <p className={styles.lie}>{lie}</p>
                    
                </div>
            </Link>
        </div>
    )
}