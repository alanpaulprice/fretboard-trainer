import React from 'react';

export default function Strings() {
    return (
        <div className="strings">
            {Array.apply(null, Array(6)).map((item, index) => (
                <div key={index} className="strings__string"></div>
            ))}
        </div>
    );
}
