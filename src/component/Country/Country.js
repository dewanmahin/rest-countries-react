import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, alpha2Code} = props.country;
    return (
        <div className='single-country'>
            <h1>This is: {name}</h1>
            <h4>Capital is: {capital} - Short Name: {alpha2Code}</h4>
        </div>
    )
};

export default Country;