export function applyUtils() {
    // Select all the buttons in the document
    const buttons = document.querySelectorAll("button");

    // Loop through the buttons and dynamically set the title attribute
    buttons.forEach((button) => {
        const buttonText = button.textContent.trim();
        console.log("The content of th button: ", buttonText);

        if (buttonText) {
            button.setAttribute("title", buttonText);
        }
    });
}
