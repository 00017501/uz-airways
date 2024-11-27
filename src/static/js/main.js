import { autoSetButtonTitle } from "./utils.js";
import CardManager from "./store/card.js";
import Card from "../components/card/index.js";
import SectionHeader from "../components/header/index.js";
import { SpinnerLoader } from "../components/loader/index.js";

// Apply the default utility functions
autoSetButtonTitle();

const cardManager = new CardManager();

document.addEventListener("DOMContentLoaded", () => {
    addDefaultCardToDOM();
});

const addDefaultCardToDOM = () => {
    let pageContent = document.querySelector("#page-content");

    const loader = SpinnerLoader("Loading Cards...");

    // Add the loader to the page
    pageContent.appendChild(loader);

    // Imitating the loading process
    setTimeout(() => {
        // Add the default cards to the Local Storage
        cardManager.initializeDefaultCards();

        // Remove the loader after the timeout
        pageContent.removeChild(loader);

        const { sections } = cardManager.getAllCards();

        for (let section of sections) {
            const cardsHeader = SectionHeader(
                section.title,
                section.keyWords,
                section.keyColor,
                section.redirectLink
            );

            let cardsInnerHtml = "";
            section.cards.forEach((card) => {
                cardsInnerHtml += Card(
                    card.cardDetailLink,
                    card.cardSize,
                    card.imageLink,
                    card.title,
                    card.description,
                    card.price
                );
            });

            const sectionWrapper = document.createElement("section");
            sectionWrapper.appendChild(cardsHeader);

            const cardGrid = document.createElement("div");
            cardGrid.className = "card-grid";
            cardGrid.innerHTML = cardsInnerHtml;
            sectionWrapper.appendChild(cardGrid);

            pageContent.appendChild(sectionWrapper);
        }
    }, 3000);
};

function handleSideBar(event) {
    console.log("WORKING");

    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
}

document.querySelector("#burger-menu").addEventListener("click", handleSideBar);
document.querySelector("#close-menu").addEventListener("click", handleSideBar);
