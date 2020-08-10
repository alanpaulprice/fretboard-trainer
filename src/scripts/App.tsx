import React, { useState } from 'react';
import Fretboard from './components/Fretboard';

export default function App() {
    const [numberOfStrings, setnumberOfStrings] = useState<number>(6);
    const [numberOfFrets, setnumberOfFrets] = useState<number>(24);

    return (
        <div className="app">
            <Fretboard
                numberOfStrings={numberOfStrings}
                numberOfFrets={numberOfFrets}
            />
        </div>
    );
}
