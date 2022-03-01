import React from 'react';
import './SquareComponent.css';

function SquareComponent({ value }) {


    return (
        <button className="square">
            {value}
        </button>
    );
}



export default SquareComponent;
