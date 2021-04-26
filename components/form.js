import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
//import ReactDOM from 'react-dom';
import { createClient } from "contentful-management";
import React from 'react';

import Cat, { PARTS } from './cat';
import '@clayui/css/lib/css/atlas.css';
import { ClaySelect } from '@clayui/form';
import ClayColorPicker from '@clayui/color-picker';
import { nanoid } from 'nanoid';
import { uuid, v4 } from "uuidv4";
import { Listbox, ListboxOption } from '@reach/listbox'
//css
import styles from '../styles/Form.module.css'
import Types from './Types';
//import Toys from './Toys';

export default function Form({ cats , types }) {
    const [form, setForm] = useState({
        to: "",
        from: "",
        lie: "",
       /* toys: [],
        types: [],*/
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
                        to: {
                            "en-US": form.to,
                        },
                        from: {
                            "en-US": form.from,
                        },
                        lie: {
                            "en-US": form.lie,
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
    const defaultPalettesRef = React.useRef({});
    const defaultPaletteNamesRef = React.useRef([]);
    const [activePalette, setActivePalette] = React.useState(false);
    const [activePart, setActivePart] = React.useState(PARTS[0].part);
    const [palette, setPalette] = React.useState({});
    const [loading, setLoading] = React.useState(true);


    /*let [selectedSlug, setSelectedSlug] = useState([])*/
    //const [data, setData] = useState('upgrade');

    React.useEffect(() => {
        fetch(`/data/presets.json`)
            .then(response => response.json())
            .then(data => {
                defaultPalettesRef.current = data;
                defaultPaletteNamesRef.current = Object.keys(data);

                const paletteName = defaultPaletteNamesRef.current[0];

                setActivePalette(paletteName);
                setPalette(defaultPalettesRef.current[paletteName]);
                setLoading(false);
            });
    }, []);


    return (
        <div className={styles.rood}>
            <form className={styles.layout}>
                <div>
                    <h1 className={styles.title}>The studio</h1>
                    <div className={styles.margin}>
                        <div className={styles.question__wrapper} >
                            <label className={styles.subsubtitle} >Choose your cat</label>
                            <div>
                            {/*types.map(type => (
                                <Types key={types.sys.id} types={type} />
                            ))*/}
                            </div>
                            {<div className={styles.row}>
                                <label className={styles.types} htmlFor="normal">Normal cat
                                <input className={styles.invisable} type="radio" name="types" id="normal" value="normal" />
                                </label>
                                <label className={styles.types} htmlFor="fuckyou">Fuck You cat
                                <input className={styles.invisable} type="radio" name="types" id="fuckyou" value="fuckyou" />
                                </label>
                                <label className={styles.types} htmlFor="embarresed">Embarresed cat
                                <input className={styles.invisable} type="radio" name="types" id="embarresed" value="embarresed" />
                                </label>
                            </div>}
                        </div>
                        <div className={styles.question__wrapper}>
                            <label className={styles.subsubtitle}>Choose your toy</label>
                            {/*<Image
                                src={'https:' + toys[0].fields.image[0].fields.file.url}
                                height={toys[0].fields.image[0].fields.file.details.image.height}
                                width={toys[0].fields.image[0].fields.file.details.image.width}
                            />*/}
                            {/*<div>
                                cats.map(cat => (
                                    <Image
                                        src={'https:' + cat.types[0].fields.image.fields.file.url}
                                        height={cat.toys[0].fields.image[0].fields.file.details.image.height}
                                        width={cat.toys[0].fields.image[0].fields.file.details.image.width}
                                    />
                                ))
                            </div>*/}
                            <div className={styles.row}>
                                <label className={styles.toys} htmlFor="bal">
                                    <input className={styles.invisable} type="radio" name="toys" id="bal" value="bal" />
                                    <img src="./bal.svg" width="45" height="45" />
                                </label>
                                <label className={styles.toys} htmlFor="vis">
                                    <input className={styles.invisable} type="radio" name="toys" id="vis" value="vis" />
                                    <img src="./vis.svg" width="80" height="45" />
                                </label>
                                <label className={styles.toys} htmlFor="muis">
                                    <input className={styles.invisable} type="radio" name="toys" id="muis" value="muis" />
                                    <img src="./muis.svg" width="80" height="45" />
                                </label>
                            </div>
                        </div>
                        <div className={styles.question__wrapper}>
                            <label className={styles.subsubtitle}>Choose your color</label>
                            <div>
                                <label> Part </label>
                                <ClaySelect onChange={e => setActivePart(e.target.value)} >
                                    {PARTS.map(item => (
                                        <ClaySelect.Option
                                            key={item.part}
                                            label={item.label}
                                            value={item.part}
                                        />
                                    ))}
                                </ClaySelect>
                                <label>Color</label>
                                {!loading && (
                                    <ColorCustomizer
                                        onChangeColor={color => {
                                            setPalette({
                                                ...palette,
                                                ...{
                                                    [`${activePart}Color`]: color
                                                }
                                            });
                                        }}
                                        color={palette[`${activePart}Color`]}
                                        defaultColor={
                                            defaultPalettesRef.current[
                                            activePalette
                                            ][`${activePart}Color`]
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <div>
                            <label className={styles.subsubtitle}>How big is your lie
                                <input className={styles.range} type="range" name="sizes" />
                            </label>
                        </div>
                        <div className={styles.lie_wrapper}>

                            <h2 className={styles.subtitle}>The lie</h2>
                            <div className={styles.lie_wrapper__padding}>
                                <label className={styles.subsubtitle}>From:
                                    <input className={styles.texbox}
                                        type="text"
                                        name="from"
                                        value={form.from}
                                        onChange={(e) => {
                                            setForm({ ...form, from: e.target.value })
                                        }}
                                    />
                                </label>
                                <label className={styles.subsubtitle} >To:
                                    <input className={styles.texbox}
                                        type="text"
                                        name="to"
                                        value={form.to}
                                        onChange={(e) => {
                                            setForm({ ...form, to: e.target.value })
                                        }}
                                    />
                                </label>
                                <label className={styles.subsubtitle} > The lie:
                                    <textarea className={styles.texbox}
                                        value={form.lie}
                                        name="lie"
                                        maxLength="500"
                                        onChange={(e) =>
                                            setForm({ ...form, lie: e.target.value })
                                        }></textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div >
                        <Link href={`/createMessage/${form.to}`}>
                            <a> <input className={styles.button} type="submit" value="send" onClick={updateDataValue} />versturen</a>
                        </Link>
                    </div>
                </div>
            </form>
            <div className={styles.cat}>
                <Cat {...palette} />
            </div>
        </div>
    )
}

function ColorCustomizer({ onChangeColor, color }) {
    return (
        <div>
            <ClayColorPicker
                onValueChange={onChangeColor}
                value={color}
            />
        </div>
    );
}

/*
export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    // types, toys
    const res = await client.getEntries({ content_type: "cat" })
    return {
        props: {
            cats: res.items,
        },
        revalidate: 1
    }
}*/