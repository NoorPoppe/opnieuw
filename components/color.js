import '@clayui/css/lib/css/atlas.css';
import { ClaySelect } from '@clayui/form';
import ClayColorPicker from '@clayui/color-picker';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';
import Cat, { PARTS } from './cat';
/* const spritemap =
    "https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg";*/

function ColorCustomizer({ onChangeColor, color }) {
    return (
        <div>
            <ClayColorPicker  onValueChange={onChangeColor}
                              value={color} />
        </div>
    );
}

function Color() {
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
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div>
                <div>
                    <Cat {...palette} />
                </div>
                <div>
                    <h2> Customize Cat </h2>
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
                        {loading && <ClayLoadingIndicator />}
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
            </div>
        </>
    );
}
export default Color;