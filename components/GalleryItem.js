import Link from "next/link"
import styles from '../styles/Gallery.module.css'
import React, { useState } from "react";


export default function GalleryItem({ cat }) {
    const [value, functieOmValueAanTePassen] = useState(0);
    const { from, to, lie, slug } = cat.fields
    return (
        <div className={styles.item}>
            <Link href={'/gallery/' + slug}>
                <div>
                    <p className={styles.from}>{from}</p>
                    <p className={styles.image}>image cat</p>
                    <p className={styles.lie} >{lie}</p>
                </div>
            </Link>
            <button onClick={() => functieOmValueAanTePassen(value + 1)}> ❤ </button>
            <p>{value}</p>
        </div>
    )
}