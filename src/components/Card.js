import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="elements__card">
            <img className="elements__card-image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button type="button" className="elements__delete-button"></button>
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__group">
                <button type="button" className="elements__like-button"></button>
                <span className="elements__counter">{props.card.likes.length}</span>
            </div>
        </div>
    );
}

export default Card;