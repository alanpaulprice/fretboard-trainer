import React from 'react';
import Frets from './Frets';
import Strings from './Strings';

interface IFretboardProps {
    numberOfStrings: number;
    numberOfFrets: number;
}

export default function Fretboard(props: IFretboardProps): JSX.Element {
    return (
        <div className="fretboard">
            <Frets numberOfFrets={props.numberOfFrets} />
            <Strings numberOfStrings={props.numberOfStrings} />
        </div>
    );
}
