import React from 'react';

interface IMarkersProps {
    numberOfFrets: number;
    numberOfStrings: number;
}

export default function Markers(props: IMarkersProps) {
    return (
        <div className="markers">
            {Array.apply(null, Array(props.numberOfFrets + 1)).map(
                (item, index) => (
                    <div className="markers__fret">
                        {Array.apply(null, Array(props.numberOfStrings)).map(
                            (item, index) => (
                                <div className="markers__string"></div>
                            ),
                        )}
                    </div>
                ),
            )}
        </div>
    );
}
