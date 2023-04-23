import React from 'react';
import './Card.css';

const Card = ({children,className,onClick}) => {
    return(
        // <article className={`card ${className}`} onClick={onClick}>{children}</article>
        <div className="main-container">{children}</div>

    )
}

export default Card;