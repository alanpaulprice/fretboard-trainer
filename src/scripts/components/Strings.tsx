import React from 'react';

export default function Strings() {
    return (
        <>
            {Array.apply(null, Array(6)).map((item, index) => (
                <div key={index} className="string"></div>
            ))}
        </>
    );
}
