import { getPageInfo } from "../../js/utils.js";

const pageInfo = getPageInfo();

export default function Navbar() {
    const staticNavLinks = {
        "destinations.html": "Destinations",
        "registration.html": "Registration",
        $: "Another link",
    };

    let linkListItems = ``;

    for (const [key, value] of Object.entries(staticNavLinks)) {
        linkListItems += `
        <li>
            <a class="link ${
                pageInfo.isPage(key) ? "active" : ""
            }" href="${key}"
                >${value}</a
            >
        </li>`;
    }

    const NavbarHTML = `
    <nav>
        <div
            class="container d-flex justify-content-between align-items-center">
            <h1>
            <a href="index.html">Uz Airways</a>
            </h1>
            <button id="burger-menu">
                <img src="./src/assets/icons/32/menu.svg" alt="" />
            </button>
            <ul class="d-flex gap-1 align-items-center">
                ${linkListItems}
                <li>
                    <button class="btn btn-primary btn-md">Sign Up</button>
                </li>
                <li></li>
            </ul>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML("afterbegin", NavbarHTML);
}
