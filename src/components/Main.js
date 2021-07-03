import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([profileInfo, cards]) => {
                setUserName(profileInfo.name);
                setUserDescription(profileInfo.about);
                setUserAvatar(profileInfo.avatar);
                setCards(cards);
            })
            .catch(result => console.log(`${result} err`))
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-edit-button" onClick={props.onEditAvatar} >
                    <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
                </button>
                <div className="profile__info">
                    <div className="profile__info-left-column">
                        <div className="profile__info-name">
                            <h1 className="profile__title">{userName}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                <div className="elements__cards">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Main;