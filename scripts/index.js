//Получаем элементы со страницы и сохраняем в переменные.
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__close-btn");
const submiteButton = popup.querySelector(".popup__save-btn");

const profile__info = document.querySelector(".profile__info");
const profile__title = profile__info.querySelector(".profile__title");
const profile__subtitle = profile__info.querySelector(".profile__subtitle");
const openButton = profile__info.querySelector(".profile__edit-btn");
const popup__form = popup.querySelector(".popup__form");
const name = popup.querySelector("#name");
const about = popup.querySelector("#about");

//Функция получения данных профиля в поля input.
function openPopup() {
  name.value = profile__title.textContent;
  about.value = profile__subtitle.textContent;
  popup.classList.add("popup_opened");
}

//Функция изменения данных профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profile__title.textContent = name.value;
  profile__subtitle.textContent = about.value;
  closePop();
}

//Функция удаления класса.
function closePop() {
  popup.classList.remove("popup_opened");
}

//Добавляем класс по клику на кнопку.
openButton.addEventListener("click", openPopup);
//Удаляем класс по клику на кнопку 'закрыть'
closePopup.addEventListener("click", closePop);
//Удаляем класс по клику на кнопку 'Сохранить'
popup__form.addEventListener("submit", formSubmitHandler);

//Лайки
const likes = document.querySelectorAll(".element__like");

function changeLike(evt) {
  evt.target.classList.toggle("element__like_active");
}
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", changeLike);
}
