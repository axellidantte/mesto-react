import React from 'react';
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <>
            <div className="page">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />

                <Footer />

            </div>

            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={"edit"} title={"Редактировать профиль"} submitButtonText={"Сохранить"}>
                <input className="pop-up__input" type="text" id="input-profile-title" name="name" minLength="2" maxLength="40" placeholder="Имя" required />
                <span className="pop-up__error" id="input-profile-title-error"></span>
                <input className="pop-up__input" type="text" id="input-profile-subtitle" name="about" minLength="2" maxLength="200" placeholder="О Себе" required />
                <span className="pop-up__error" id="input-profile-subtitle-error"></span>
            </PopupWithForm>

            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={"add"} title={"Новое место"} submitButtonText={"Создать"}>
                <input className="pop-up__input" id="popup-add-title" type="text" name="place" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="pop-up__error" id="popup-add-title-error"></span>
                <input className="pop-up__input" id="popup-add-link" type="url" name="url" placeholder="Ссылка на картинку" required />
                <span className="pop-up__error" id="popup-add-link-error"></span>
            </PopupWithForm>


            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={"avatar"} title={"Обновить аватар"} submitButtonText={"Сохранить"}>
                <input className="pop-up__input" id="url-avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                <span className="pop-up__error" id="url-avatar-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
        </>
    );
}

export default App;
