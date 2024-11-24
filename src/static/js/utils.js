/**
 * Applies utility functions to enhance button elements.
 * This function selects all the buttons in the document
 * and sets their title attribute based on their text content.
 */
export function autoSetButtonTitle() {
    // Select all the buttons in the document
    const buttons = document.querySelectorAll("button");

    // Loop through the buttons and dynamically set the title attribute
    buttons.forEach((button) => {
        // Get the trimmed text content of the button
        const buttonText = button.textContent.trim();
        console.log("The content of the button: ", buttonText);

        // If button has text content, set it as the title attribute
        if (buttonText) {
            button.setAttribute("title", buttonText);
        }
    });
}