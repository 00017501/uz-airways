const CardSizes = Object.freeze({
    BIG: "lg",
    SMALL: "sm",
});

export default function Card(
    cardDetailLink,
    cardSize,
    imageLink,
    title,
    description,
    price
) {
    const cardWrapper = document.createElement("div");
    cardWrapper.innerHTML = `
        <a href="/${cardDetailLink}">
            <figure class="card card-image-top card-${cardSize || "lg"}">
                <div class="card-image-wrapper">
                    <img
                        class="card-image"
                        src="${imageLink}"
                        alt="City view" />
                </div>
                <figcaption class="card-text">
                    <div class="card-text-detail overflow-hidden">
                        <h1 class="card-title overflow-ellipsis">${title}</h1>
                        <p class="card-description overflow-ellipsis">${description}</p>
                    </div>
                    <h2 class="card-text-price">
                        <span>Flights from </span>$${price}
                    </h2>
                </figcaption>
            </figure>
        </a>
    `;
    return cardWrapper.firstElementChild;
}
