export default function Footer() {
    const footerHTML = `
    <footer class="d-flex flex-column pt-5">
            <div class="container-xl">
                <div class="footer-content-wrapper">
                    <div class="d-flex flex-column">
                        <h1>Uz Airways</h1>
                    </div>
                    <div class="d-flex flex-column">
                        <ul class="d-flex flex-column gap-1">
                            <li>
                                <span class="column-header">About</span>
                            </li>
                            <li>
                                <a class="link" href="destinations.html"
                                    >Destinations</a
                                >
                            </li>
                            <li><a class="link" href="#">Github</a></li>
                            <li><a class="link" href="#">Website</a></li>
                            <li><a class="link" href="#">Some</a></li>
                        </ul>
                    </div>
                    <div class="d-flex flex-column">
                        <ul class="d-flex flex-column gap-1">
                            <li>
                                <span class="column-header"
                                    >Partner with us</span
                                >
                            </li>
                            <li>
                                <a class="link" href="destinations.html"
                                    >Partnership programs</a
                                >
                            </li>
                            <li><a class="link" href="#">Github</a></li>
                            <li><a class="link" href="#">Website</a></li>
                            <li><a class="link" href="#">Some</a></li>
                        </ul>
                    </div>
                    <div class="d-flex flex-column">
                        <ul class="d-flex flex-column gap-1">
                            <li>
                                <span class="column-header">Support</span>
                            </li>
                            <li>
                                <a class="link" href="destinations.html"
                                    >Destinations</a
                                >
                            </li>
                            <li><a class="link" href="#">Github</a></li>
                            <li><a class="link" href="#">Website</a></li>
                            <li><a class="link" href="#">Some</a></li>
                        </ul>
                    </div>
                    <div class="d-flex flex-column">
                        <ul class="d-flex flex-column gap-1">
                            <li>
                                <span class="column-header">Get the app</span>
                            </li>
                            <li>
                                <a class="link" href="destinations.html"
                                    >Destinations</a
                                >
                            </li>
                            <li><a class="link" href="#">Github</a></li>
                            <li><a class="link" href="#">Website</a></li>
                            <li><a class="link" href="#">Some</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="mt-4" />
            <div class="container-xl">
                <div class="pt-3 pb-3 text-end pe-4 site-signature">
                    © 2024 Uz Airways incorporated
                </div>
            </div>
        </footer>`;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
}
