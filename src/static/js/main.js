import { autoSetButtonTitle } from "./utils.js";
import CardManager from "./store/card.js";
import Card from "../components/card/index.js";
import SectionHeader from "../components/header/index.js";

// Apply the default utility functions
autoSetButtonTitle();

document.querySelector("#fetch-btn").addEventListener("click", () => {
    console.log("Fetching cards...");
    fetchCards();
});

document.querySelector("#add-btn").addEventListener("click", () => {
    console.log("Creating cards...");
    createDefaultCards();
});

const sectionHeader = SectionHeader(
    "Flights are confirmed",
    "Flights are",
    "green",
    "#"
);

const cardManager = new CardManager();

function fetchCards() {
    const cards = cardManager.getDefaultCards();
    let innerHtml = "";
    cards.forEach((card) => {
        innerHtml += Card(
            card.cardDetailLink,
            card.cardSize,
            card.imageLink,
            card.title,
            card.description,
            card.price
        );
    });
    document.querySelector("#some").innerHTML = innerHtml;
}
