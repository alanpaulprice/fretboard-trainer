import React from 'react';

interface IFretsProps {
    numberOfFrets: number;
}

const inlays: Number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];

export default function Frets(props: IFretsProps): JSX.Element {
    return (
        <>
            {Array.apply(null, Array(props.numberOfFrets)).map(
                (item, index) => (
                    <div key={index} className="fret">
                        {inlays.includes(index + 1) && (
                            <div
                                className={`fret-inlay ${
                                    index + 1 === 12 || index + 1 === 24
                                        ? 'fret-inlay--alternate'
                                        : ''
                                }`}
                            ></div>
                        )}
                    </div>
                ),
            )}
        </>
    );
}
