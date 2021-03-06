import React from 'react';
import '../../styles/Card.css';

const Card = ({children, className}) => {
    const classes = 'card ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    )
};

export default Card;