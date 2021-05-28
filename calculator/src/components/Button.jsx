import React from 'react';
import './Button.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let classes = 'button ';
    classes += props.operation ? 'operation' : ''//Se a propriedade 'operation' for passada para o botão...
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            onClick={_ => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
