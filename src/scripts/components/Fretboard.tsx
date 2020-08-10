import React from 'react';
import Frets from './Frets';
import Strings from './Strings';

interface IFretboardProps {
    numberOfFrets: number;
}

export default function Fretboard(props: IFretboardProps): JSX.Element {
    return (
        <div className="fretboard">
            <Frets numberOfFrets={props.numberOfFrets} />
            <Strings />
        </div>
    );
}
