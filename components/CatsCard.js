
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Gallery.module.css'
import React, { useState } from "react";
import image from 'next/image';

export default function CatCard({ cat }) {
    //const cat = this.state.section;
    const { from, lie, slug, toys, types } = cat.fields
    /*const [newData, setNewData] = useState({
        likes: {},

    });

    const updateDataValue = async (e) => {
        e.preventDefault();
        console.log(process.env.CONTENTFUL_ACCES_KEY)
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCES_KEY,
        })
        // Create entry
        client
            .getSpace("7h21otlgi1p3")
            .then((space) => space.getEnvironment("master"))
            .then((environment) =>
                environment.createEntryWithId("cat", uuid(), {
                    fields: {
                        likes: {
                            "en-US": newData.likes,
                        },
                    },
                })
            )
            .then((entry) => {
                // tis gelukt
            })
            .catch((err) => {
                //niet gelukt
            });
    };
    const [value, functieOmValueAanTePassen] = useState(0);
    const [like, setLike] = useState();*/
    console.log(cat)
    return (
      
        <div className={styles.item}>
            <div className={styles.head}>
                <span className={styles.circle}></span>
                <p className={styles.from}>{from}</p>
            </div>

            <div className={styles.image}> 
                {/*<Image
                    src={'https:' + toys.fields.image[0].fields.file.url}
                    width={toys.fields.image.fields.file.details.image.width}
                    height={toys.fields.image.fields.file.details.image.height}
                />*/}
            </div>
           
            <div className={styles.image}>
                {/*<Image
                    src={'https:' + types.fields.image.fields.file.url}
                    width= "330px"
                    height="330px"
                />*/}
            </div>
            {/*
            <div className={styles.hearts}> 
                <button className={styles.hearts__button} 
                        type="button" 
                        disabled={like >= 1} 
                        value={newData.likes}
                        name="likes"
                        onClick={(e) => setNewData({ ...newData, likes: e.target.value })} > like </button>  </div>
            <input type="button" id="likes" name="likes" value={newData} onChange={(e) => setNewData(e.target.value)} />*/}
            <Link href={'/gallery/' + slug}>
                <div>

                    <p className={styles.lie}>{/*likes*/}{/*setNewData*/} likes</p>
                    <p className={styles.lie}>{lie}</p>
                    
                </div>
            </Link>
        </div>
    )
}