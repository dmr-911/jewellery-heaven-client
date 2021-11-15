import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {key} = useParams();
    return (
        <div>
            <h2>This is purchase field for ${key} product</h2>
        </div>
    );
};

export default Purchase;