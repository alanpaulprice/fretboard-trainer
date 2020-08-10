import React from 'react';
import Frets from './Frets';

interface IFretboardProps {}

export default function Fretboard(props: IFretboardProps): JSX.Element {
    return (
        <div className="fretboard">
            <Frets />
        </div>
    );
}
