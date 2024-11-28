// File that contains the components related to the Welcome page

import CardManager from "../../js/store/card.js";
import Card from "../../components/card/index.js";
import SectionHeader from "../../components/header/index.js";
import { SpinnerLoader } from "../../components/loader/index.js";
import AssetPathManager from "../assetsUrlManager.js";
const cardManager = new CardManager();

const addDefaultCardToDOM = () => {
    let pageContent = document.querySelector(".page-content");
    const loader = SpinnerLoader("Loading Cards...");
    pageContent.appendChild(loader);

    setTimeout(() => {
        cardManager.initializeDefaultCards();
        pageContent.removeChild(loader);

        const { sections } = cardManager.getAllCards();
        const assetManager = new AssetPathManager();

        for (let section of sections) {
            const cardsHeader = SectionHeader(
                section.title,
                section.keyWords,
                section.keyColor,
                section.redirectLink
            );

            const sectionWrapper = document.createElement("section");
            sectionWrapper.appendChild(cardsHeader);

            const cardGrid = document.createElement("div");
            cardGrid.className = "card-grid";

            section.cards.forEach((card) => {
                const cardElement = Card(
                    card.cardDetailLink,
                    card.cardSize,
                    card.imageLink,
                    card.title,
                    card.description,
                    card.price
                );
                cardGrid.appendChild(cardElement);
            });

            sectionWrapper.appendChild(cardGrid);
            pageContent.appendChild(sectionWrapper);
        }

        // Update paths after all cards are added
        assetManager.execute();
    }, 3000);
};

export default function WelcomePage() {
    addDefaultCardToDOM();
}
