export default function SectionHeader(
    title,
    keyWords,
    keyColor,
    redirectLink = null
) {
    const sectionHeader = document.createElement("div");
    sectionHeader.className =
        "section-header d-flex justify-content-between mt-3 mb-1";

    const h1 = document.createElement("h1");
    h1.appendChild(formatTitle(title, keyWords, keyColor));
    sectionHeader.appendChild(h1);

    if (redirectLink) {
        const link = document.createElement("a");
        link.className = "d-flex align-items-center";
        link.href = redirectLink;

        const span = document.createElement("span");
        span.textContent = "All";
        link.appendChild(span);

        const img = document.createElement("img");
        img.width = 25;
        img.height = 25;
        img.src = "./src/assets/icons/18/GrayArrowRight.svg";
        img.alt = "";
        link.appendChild(img);

        sectionHeader.appendChild(link);
    }

    return sectionHeader;
}

/**
 * Formats the main text by highlighting key words.
 *
 * @param {string} mainText - The entire text of title.
 * @param {string} keyWords - The words to be highlighted within the title.
 * @param {string} keyColor - The color used to highlight the key words.
 * @returns {DocumentFragment} A document fragment containing the formatted text
 */
const formatTitle = (mainText, keyWords, keyColor) => {
    const fragment = document.createDocumentFragment();
    const keyWordsArray = keyWords.trim().split(/\s+/);

    // Split the main text into words and iterate through each word
    mainText
        .trim()
        .split(/\s+/)
        .forEach((word, index) => {
            if (keyWordsArray.includes(word)) {
                // Create span for highlighted word
                const span = document.createElement("span");
                span.className = `text-gradient-${keyColor}`;
                span.textContent = word;
                fragment.appendChild(span);
            } else {
                fragment.appendChild(document.createTextNode(word));
            }

            // Add space between words (except for the last word)
            if (index < mainText.trim().split(/\s+/).length - 1) {
                fragment.appendChild(document.createTextNode(" "));
            }
        });

    return fragment;
};
