import Form from "../../components/form/index.js";

export default function RegistrationPage() {
    const registrationHTML = Form();
    let pageContent = document.querySelector(".page-content");
    pageContent.innerHTML = registrationHTML;
    const getElements = () => {
        return {
            form: document.getElementById("passengerForm"),
            select: document.getElementById("destinationSelect"),
            visual: document.querySelector(".form-visual"),
            firstName: document.getElementById("firstName"),
            lastName: document.getElementById("lastName"),
            departureDate: document.getElementById("departureDate"),
        };
    };

    const getFlightsData = () => {
        return JSON.parse(localStorage.getItem("destinations"));
    };

    const getSelectedDestination = (flights, selectedValue) => {
        return flights.sections
            .flatMap((section) => section.cards)
            .find((card) => card.title === selectedValue);
    };

    // Select Population
    const populateSelectOptions = (flights, select) => {
        flights.sections.forEach((section) => {
            console.log(select);

            section.cards.forEach((card) => {
                const option = document.createElement("option");
                option.value = card.title;
                option.textContent = card.title;
                select.appendChild(option);
            });
        });
    };

    // Generate Passenger HTML
    const generatePassengerDetailsHTML = (
        firstName,
        lastName,
        departureDate
    ) => {
        if (!firstName.value && !lastName.value) return "";

        return `
            <div class="mb-3 p-2 visual-detail-card">
            <i>
                <h4 class="mb-1">Passenger Details</h4>
                <p>- Full Name: ${firstName.value} ${lastName.value}</p>
                ${
                    departureDate.value
                        ? `<p>- Departure Date: ${departureDate.value}</p>`
                        : ""
                }
                        </i>
            </div>
        `;
    };

    // Generate HTML content for tags
    const generateTagsHTML = (tags) => {
        return tags
            .map(
                (tag) => `
            <span class="form-visual-tag">
                ${tag}
            </span>
        `
            )
            .join("");
    };

    // Generate HTML content for destinations
    const generateDestinationHTML = (
        destination,
        firstName,
        lastName,
        departureDate
    ) => {
        return `
            <div class="form-visual-card">
                <img src="${destination.imageLink}" 
                     alt="${destination.title}" 
                     class="mb-2 w-100" 
                     >
                
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h1 class="text-gradient-purple">${destination.title}</h1>
                    <p class="text-gradient-purple">$${destination.price}</p>
                </div>
    
                ${generatePassengerDetailsHTML(
                    firstName,
                    lastName,
                    departureDate
                )}
                <p class="mb-3 form-visual-description">${
                    destination.description
                }</p>
    
                <div class="d-flex gap-2">
                    ${generateTagsHTML(destination.tags)}
                </div>
            </div>
        `;
    };

    const generatePlaceholderHTML = () => {
        return `
            <div class="p-4 d-flex justify-content-center align-items-center visual-placeholder" 
                 >
                <p>Please select a destination</p>
            </div>
        `;
    };

    // Update Visual Display
    const updateVisual = () => {
        const elements = getElements();
        const flights = getFlightsData();
        const selectedDestination = getSelectedDestination(
            flights,
            elements.select.value
        );

        elements.visual.innerHTML = selectedDestination
            ? generateDestinationHTML(
                  selectedDestination,
                  elements.firstName,
                  elements.lastName,
                  elements.departureDate
              )
            : generatePlaceholderHTML();
    };
    const validateTextInput = (e) => {
        const input = e.target;
        const value = input.value.trim();

        // Remove existing error message if present
        const existingError = input.nextElementSibling;
        if (existingError?.classList.contains("form-feedback")) {
            existingError.remove();
        }

        // Check if empty
        if (!value) {
            input.classList.add("invalid");
            const errorMessage = document.createElement("small");
            errorMessage.classList.add("form-feedback");
            errorMessage.textContent = "This field is required.";
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
            return false;
        }

        // Check length
        if (value.length < 3) {
            input.classList.add("invalid");
            const errorMessage = document.createElement("small");
            errorMessage.classList.add("form-feedback");
            errorMessage.textContent = "Please enter at least 3 characters.";
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
            return false;
        }

        // If valid, remove invalid class
        input.classList.remove("invalid");
        return true;
    };

    // Event Listeners

    const elements = getElements();

    document.querySelectorAll('input[type="text"]').forEach((input) => {
        input.addEventListener("input", validateTextInput);
        input.addEventListener("blur", validateTextInput);
    });
    elements.form.addEventListener("input", updateVisual);
    elements.select.addEventListener("change", updateVisual);

    const flights = getFlightsData();
    populateSelectOptions(flights, elements.select);
    updateVisual();
}
