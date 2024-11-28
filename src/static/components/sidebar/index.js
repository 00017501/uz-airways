import { getPageInfo } from "../../js/utils.js";

const pageInfo = getPageInfo();

export default function SideBar() {
    const staticNavLinks = {
        "destinations.html": "Destinations",
        "#": "Some link",
        "##": "Another link",
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

    const sideBarHTML = `
    <div class="overflow-controller">
        <aside id="sidebar">
            <div
                class="side-wrapper d-flex justify-content-center align-items-center">
                <button id="close-menu">
                    <img src="./src/assets/icons/32/x close no.svg" alt="" />
                </button>
                <ul>
                    ${linkListItems}
                </ul>
            </div>
        </aside>
    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", sideBarHTML);

    function handleSideBar(event) {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("active");
    }

    document
        .querySelector("#burger-menu")
        .addEventListener("click", handleSideBar);
    document
        .querySelector("#close-menu")
        .addEventListener("click", handleSideBar);
}
