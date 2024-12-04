import { getPageInfo } from "../../js/utils.js";

const pageInfo = getPageInfo();

export default function Navbar() {
    const staticNavLinks = {
        "booking": "Booking",
        "destinations": "Destinations",
        "registration": "Registration",
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
            <a href="https://00017501.github.io/uz-airways">Uz Airways</a>
            </h1>
            <button id="burger-menu">
                <img src="./src/assets/icons/32/menu.svg" alt="" />
            </button>
            <ul class="d-flex gap-1 align-items-center">
                ${linkListItems}
                <li>
                    <button class="btn btn-primary btn-md">Book</button>
                </li>
                <li></li>
            </ul>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML("afterbegin", NavbarHTML);
}
