import React from 'react';
import './Button.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (

        <button className={
            `button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}`
        }  onClick={e=>props.click && props.click(e.label) }
        >{props.label}
        </button>
    )
}
