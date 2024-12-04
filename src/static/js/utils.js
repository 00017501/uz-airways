import Navbar from "../components/navbar/index.js";
import SideBar from "../components/sidebar/index.js";
import Footer from "../components/footer/index.js";
/**
 * Applies utility functions to enhance button elements.
 * This function selects all the buttons in the document
 * and sets their title attribute based on their text content.
 */
export function useAutoSetButtonTitle() {
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
/**
 * Attached the content (HTML code) that is shared
 * by multiple pages. For example: `Navbar`, `Footer`, `Side Bar`
 */
export function useSharedComponents() {
    // Add side bar and navbar to the top of the body element
    Navbar();
    SideBar();
    Footer();
}

/**
 * Utility function to get current page information
 */
export function getPageInfo() {
    const locationInfo = {
        fullUrl: window.location.href, // Complete URL
        pathname: window.location.pathname, // Path without domain
        page: window.location.pathname.split("/").pop() || "index.html", // Current page name
        hash: window.location.hash, // URL hash/fragment
        search: window.location.search, // Query parameters
        hostname: window.location.hostname, // Domain name
    };

    return {
        location: locationInfo,

        isPage: (pageName) => {
            const currentPage = locationInfo.page.toLowerCase();
            return currentPage === pageName.toLowerCase();
        },

        getQueryParam: (param) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },
    };
}
