import React from 'react';

export default function Fretboard() {
    const frets = () =>
        Array.apply(null, Array(24)).map(() => (
            <div className="fretboard__fret" />
        ));

    return <div className="fretboard">{frets()}</div>;
}
