import cardsData from "./menu.json";
import cards from "/templates/cards.hbs";

//Разметка

const menu = document.querySelector(".js-menu");
const cardsHtml = createCards(cardsData);

menu.insertAdjacentHTML("beforeend", cardsHtml);

function createCards(cardsData) {
  return cards(cardsData);
}
