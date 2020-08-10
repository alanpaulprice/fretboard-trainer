import React from 'react';

interface IStringsProps {
    numberOfStrings: number;
}

export default function Strings(props: IStringsProps) {
    return (
        <div className="strings">
            {Array.apply(null, Array(props.numberOfStrings)).map(
                (item, index) => (
                    <div key={index} className="strings__string" />
                ),
            )}
        </div>
    );
}
