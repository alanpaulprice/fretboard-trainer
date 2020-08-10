import React, { useState } from 'react';
import Fretboard from './components/Fretboard';

export default function App() {
    const [numberOfFrets, setnumberOfFrets] = useState<number>(24);

    return (
        <div className="app">
            <Fretboard numberOfFrets={numberOfFrets} />
        </div>
    );
}
