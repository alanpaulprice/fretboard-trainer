import React from 'react';
import Frets from './Frets';
import Strings from './Strings';
import Markers from './Markers';

interface IFretboardProps {
    numberOfStrings: number;
    numberOfFrets: number;
}

export default function Fretboard(props: IFretboardProps): JSX.Element {
    return (
        <div className="fretboard">
            <Frets numberOfFrets={props.numberOfFrets} />
            <Strings numberOfStrings={props.numberOfStrings} />
            <Markers
                numberOfFrets={props.numberOfFrets}
                numberOfStrings={props.numberOfStrings}
            />
        </div>
    );
}
