import { useState } from 'react'
import Link from 'next/link'
//import { Listbox, ListboxOption } from '@reach/listbox'
//import '@reach/listbox/styles.css'
import styles from '../styles/Form.module.css'
import React from 'react';
import Cat, { PARTS } from '../components/cat';
import '@clayui/css/lib/css/atlas.css';
import { ClaySelect } from '@clayui/form';
import ClayColorPicker from '@clayui/color-picker';
import { nanoid } from 'nanoid'
//import ClayLoadingIndicator from '@clayui/loading-indicator';

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


export default function Form({ cats, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            to: e.target.to.value,
            from: e.target.from.value,
            lie: e.target.lie.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    //const { types } = cats.fields
    let [to, setTo] = useState('')
    let [lie, setLie] = useState('')
    let [from, setFrom] = useState('')
    const defaultPalettesRef = React.useRef({});
    const defaultPaletteNamesRef = React.useRef([]);
    const [activePalette, setActivePalette] = React.useState(false);
    const [activePart, setActivePart] = React.useState(PARTS[0].part);
    const [palette, setPalette] = React.useState({});
    const [loading, setLoading] = React.useState(true);

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
            <form className={styles.layout}
                name="cat"
                method="POST"
                onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label className={styles.title}>The studio</label>
                    <div className={styles.margin}>
                        <div className={styles.question__wrapper} >
                            <label className={styles.subsubtitle}>Choose your cat</label>
                            <div className={styles.row}>
                                <label className={styles.types} htmlFor="normal">Normal cat
                                <input className={styles.invisable} type="radio" name="types" id="normal" value="normal" />
                                </label>
                                <label className={styles.types} htmlFor="fuckyou">Fuck You cat
                                <input className={styles.invisable} type="radio" name="types" id="fuckyou" value="fuckyou" />
                                </label>
                                <label className={styles.types} htmlFor="embarresed">Embarresed cat
                                <input className={styles.invisable} type="radio" name="types" id="embarresed" value="embarresed" />
                                </label>
                            </div>
                        </div>
                        <div className={styles.question__wrapper}>
                            <label className={styles.subsubtitle}>Choose your toy</label>
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

                            <label className={styles.subtitle}>The lie</label>
                            <div className={styles.lie_wrapper__padding}>
                                <label className={styles.subsubtitle}>From:
                                    <input className={styles.texbox}
                                        type="text"
                                        name="from"
                                        value={from}
                                        onChange={(e) => {
                                            setFrom(e.target.value)
                                        }}
                                    />
                                </label>
                                <label className={styles.subsubtitle} >To:
                                    <input className={styles.texbox}
                                        type="text"
                                        name="to"
                                        value={to}
                                        onChange={(e) => {
                                            setTo(e.target.value)
                                        }}
                                    />
                                </label>
                                <label className={styles.subsubtitle} > The lie:
                                    <textarea className={styles.texbox}
                                        name="lie"
                                        maxLength="500"></textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div >
                        <Link href={`/createMessage/${nanoid()}`}>
                            <a> <input className={styles.button} type="submit" value="Send" /></a>
                        </Link>
                    </div>

                    {/*<Link href={`/createMessage/?to=${to}&from=${from}`}>
                    Wee
                </Link>*/}
                </div>
            </form>
            <div className={styles.cat}>
                <Cat {...palette} />
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: "cat" })
    return {
        props: {
            cats: res.items,
        },
        revalidate: 1
    }
}