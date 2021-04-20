
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Gallery.module.css'
import React, { useState } from "react";

export default function CatCard({ cat }) {
    const [value, functieOmValueAanTePassen] = useState(0);
    const { to, from, lie, slug, toys, types, sizes } = cat.fields

    return (
        <div className={styles.item}>
            <div className={styles.head}>
                <span className={styles.circle}></span>
                <p className={styles.from}>{from}</p>
            </div>

            <div className={styles.image}>
                {<Image
                    src={'https:' + types[0].fields.image.fields.file.url}
                    width= "330px"
                    height="330px"
                />}

            </div>
            <Link href={'/gallery/' + slug}>
                <div>
                    <button className={styles.heart} onClick={() => functieOmValueAanTePassen(value + 1)}> ❤ </button>
                    <p className={styles.lie}>{value} likes</p>
                    <p className={styles.lie}>{lie}</p>
                    
                </div>
            </Link>
        </div>
    )
}