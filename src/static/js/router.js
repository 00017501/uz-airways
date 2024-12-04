import { getPageInfo } from "./utils.js";
import WelcomePage from "./pages/welcome.js";
import DestinationsPage from "./pages/destinations.js";
import BookingPage from "./pages/booking.js";
import RegistrationPage from "./pages/registration.js";

export function useRouter() {
    const pageInfo = getPageInfo();

    if (pageInfo.isPage("/") || pageInfo.isPage("index") || pageInfo.isPage("index.html")) {
        WelcomePage();
    } else if (pageInfo.isPage("destinations")) {
        DestinationsPage();
    } else if (pageInfo.isPage("registration")) {
        RegistrationPage();
    } else if (pageInfo.isPage("booking")) {
        BookingPage();
    }
}
