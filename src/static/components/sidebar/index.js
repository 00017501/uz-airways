export default function SideBar() {
    const sideBarHTML = `
    <div class="overflow-controller">
        <aside id="sidebar">
            <div
                class="side-wrapper d-flex justify-content-center align-items-center">
                <button id="close-menu">
                    <img data-src src="assets/icons/32/x close no.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <a data-page-href class="link" href="pages/destinations.html"
                            >Destinations</a
                        >
                    </li>
                    <li><a class="link" href="#">Some</a></li>
                    <li><a class="link" href="#">Some</a></li>
                    <li><a class="link" href="#">Some</a></li>
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
