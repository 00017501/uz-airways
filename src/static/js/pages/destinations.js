export default function DestinationGalleryPage() {
    let pageContent = document.querySelector(".page-content");
    const destinations = JSON.parse(localStorage.getItem("destinations"));

    const generateDestinationCard = (destination) => {
        const destinationId = destination.title
            .toLowerCase()
            .replace(", ", "-")
            .replace(" ", "-");
        return `
            <div id="${destinationId}" class="card card-lg">
                <div class="card-image-wrapper">
                    <img src="${destination.imageLink}" 
                         alt="${destination.title}"
                         class="card-image">
                </div>
                <div class="card-text">
                    <div class="card-text-detail">
                        <h3 class="card-title">${destination.title}</h3>
                        <p class="card-description">${destination.description}</p>
                    </div>
                    <div class="card-text-price">
                        $${destination.price}
                    </div>
                </div>
            </div>
        `;
    };

    pageContent.innerHTML = `
        <div class="container p-4">
            ${destinations.sections
                .map(
                    (section) => `
                <div class="mb-4">
                    <h1 class="text-gradient-${section.keyColor} mb-2"># <i>${
                        section.title
                    }</i></h1>
                    <div class="d-flex destinations-gallery gap-3">
                        ${section.cards
                            .map((card) => generateDestinationCard(card))
                            .join("")}
                    </div>
                </div>
            `
                )
                .join("")}
        </div>
    `;
}
