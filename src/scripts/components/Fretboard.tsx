import React from 'react';

export default function Fretboard() {
    const inlays: Number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];

    const frets = () =>
        Array.apply(null, Array(24)).map((item, index) => (
            <div className="fretboard__fret">
                {inlays.includes(index + 1) ? (
                    <div
                        className={`fretboard__fret-inlay ${
                            index + 1 === 12 || index + 1 === 24
                                ? 'fretboard__fret-inlay--alternate'
                                : ''
                        }`}
                    ></div>
                ) : null}
            </div>
        ));

    return <div className="fretboard">{frets()}</div>;
}
