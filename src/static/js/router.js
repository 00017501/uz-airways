import { getPageInfo } from "./utils.js";
import WelcomePage from "./pages/welcome.js";
import DestinationsPage from "./pages/destinations.js";
import RegistrationPage from "./pages/registration.js";

export function useRouter() {
    const pageInfo = getPageInfo();

    if (pageInfo.isPage("index.html")) {
        WelcomePage();
    } else if (pageInfo.isPage("destinations.html")) {
        DestinationsPage();
    } else if (pageInfo.isPage("registration.html")) {
        RegistrationPage();
    }
}
