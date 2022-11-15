//Получаем элементы со страницы и сохраняем в переменные.
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__close_button");
const submiteButton = popup.querySelector(".popup__save_button");
const profile__info = document.querySelector(".profile__info");
const profile__title = profile__info.querySelector(".profile__title");
const profile__subtitle = profile__info.querySelector(".profile__subtitle");
const openButton = profile__info.querySelector(".profile__edit-btn");

function formSubmitHandler(evt) {
  evt.preventDefault();
}

//Функция добавления класса.
function addClass() {
  popup.classList.add("popup__opened");
}

//Функция удаления класса.
function removeClass() {
  popup.classList.remove("popup__opened");
}

//Добавляем класс по клику на кнопку.
openButton.addEventListener("click", addClass);
//Удаляем класс по клику на кнопку 'закрыть'
closePopup.addEventListener("click", removeClass);
//Удаляем класс по клику на кнопку 'Сохранить'
