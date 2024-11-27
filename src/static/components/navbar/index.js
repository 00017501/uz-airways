export default function Navbar() {
    const NavbarHTML = `
    <nav>
        <div
            class="container d-flex justify-content-between align-items-center">
            <h1>
            <a href="../../index.html">Uz Airways</a>
            </h1>
            <button id="burger-menu">
                <img data-src src="assets/icons/32/menu.svg" alt="" />
            </button>
            <ul class="d-flex gap-1 align-items-center">
                <li>
                    <a data-page-href class="link" href="pages/destinations.html"
                        >Destinations</a
                    >
                </li>
                <li><a class="link" href="#">Some</a></li>
                <li><a class="link" href="#">Some</a></li>
                <li><a class="link" href="#">Some</a></li>
                <li>
                    <button class="btn btn-primary btn-md">Sign Up</button>
                </li>
                <li></li>
            </ul>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML("afterbegin", NavbarHTML);
}
