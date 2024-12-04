import { SpinnerLoader } from "../../components/loader/index.js";
import FlightsTableManager from "../store/flights.js";
import { FlightsTable, PricesTable } from "../../components/table/index.js";
import SectionHeader from "../../components/header/index.js";
import PricesTableManager from "../store/flightPrices.js";

const pricesManager = new PricesTableManager();
const flightsManager = new FlightsTableManager();

export default function BookingPage() {
    let pageContent = document.querySelector(".page-content");
    const loader = SpinnerLoader("Loading Flights...");
    pageContent.appendChild(loader);

    // Simulate loading delay
    setTimeout(() => {
        flightsManager.initializeDefaultFlights();
        pageContent.removeChild(loader);

        const dataSet = flightsManager.getAllFlights();

        // Create and append filters HTML
        const filtersHTML = createFiltersHTML();
        pageContent.innerHTML += filtersHTML;

        // Create and append header
        const header = SectionHeader(
            "Choose a department flight",
            "department flights",
            "purple"
        );

        pageContent.appendChild(header);

        // Append table HTML
        const tablesWrapper = document.createElement("div");
        tablesWrapper.id = "tables-wrapper";
        tablesWrapper.classList = "d-flex justify-content-between";
        pageContent.appendChild(tablesWrapper);

        const tableContainer = document.createElement("div");
        tableContainer.id = "flights-table-container";
        tableContainer.classList = "d-flex ";
        tableContainer.innerHTML = FlightsTable(dataSet);
        tablesWrapper.appendChild(tableContainer);

        // Initialize filters
        initializeFilters(dataSet);

        // Append the prices constainer
        const pricesContainer = document.createElement("div");
        pricesContainer.id = "prices-table-container";
        pricesContainer.classList = "d-flex";
        pricesContainer.innerHTML = PricesTable(
            pricesManager.getFormattedTableData()
        );
        tablesWrapper.appendChild(pricesContainer);
    }, 3000);
}

function createFiltersHTML() {
    return `
        <div class="filters-container d-flex gap-1 mt-3">
            <div class="search-container">
                <input 
                    type="text" 
                    id="search-input" 
                    class="form-control" 
                    placeholder="Search flights..."
                >
            </div>
            <div class="price-filter">
                <input 
                    type="number" 
                    id="min-price" 
                    class="form-control" 
                    placeholder="Min price"
                    min="0"
                >
                <span>-</span>
                <input 
                    type="number" 
                    id="max-price" 
                    class="form-control" 
                    placeholder="Max price"
                    min="0"
                >
            </div>
            <div class="stops-filter">
                <select id="stops-filter" class="form-control">
                    <option value="all">All Stops</option>
                    <option value="0">Non-stop</option>
                    <option value="1">1 Stop</option>
                    <option value="2">2+ Stops</option>
                </select>
            </div>
            <div class="duration-filter">
                <select id="duration-filter" class="form-control">
                    <option value="all">All Durations</option>
                    <option value="short">Under 8h</option>
                    <option value="medium">8h - 16h</option>
                    <option value="long">Over 16h</option>
                </select>
            </div>
        </div>
    `;
}

function initializeFilters(initialData) {
    const searchInput = document.getElementById("search-input");
    const minPrice = document.getElementById("min-price");
    const maxPrice = document.getElementById("max-price");
    const stopsFilter = document.getElementById("stops-filter");
    const durationFilter = document.getElementById("duration-filter");

    function applyFilters() {
        let filteredData = {
            providers: initialData.providers
                .map((provider) => {
                    return {
                        ...provider,
                        flights: provider.flights.filter((flight) => {
                            // Search filter
                            const searchTerm = searchInput.value.toLowerCase();
                            const matchesSearch =
                                !searchTerm ||
                                provider.name
                                    .toLowerCase()
                                    .includes(searchTerm) ||
                                flight.duration
                                    .toLowerCase()
                                    .includes(searchTerm) ||
                                flight.from.toLowerCase().includes(searchTerm);

                            // Price filter
                            const matchesMinPrice =
                                !minPrice.value ||
                                flight.price >= Number(minPrice.value);
                            const matchesMaxPrice =
                                !maxPrice.value ||
                                flight.price <= Number(maxPrice.value);

                            // Stops filter
                            const matchesStops =
                                stopsFilter.value === "all" ||
                                Number(stopsFilter.value) === flight.stops;

                            // Duration filter
                            const flightHours =
                                parseFloat(flight.duration.split("h")[0]) +
                                parseFloat(
                                    flight.duration.split("h")[1].split("m")[0]
                                ) /
                                    60;
                            const matchesDuration =
                                durationFilter.value === "all" ||
                                (durationFilter.value === "short" &&
                                    flightHours < 8) ||
                                (durationFilter.value === "medium" &&
                                    flightHours >= 8 &&
                                    flightHours <= 16) ||
                                (durationFilter.value === "long" &&
                                    flightHours > 16);

                            return (
                                matchesSearch &&
                                matchesMinPrice &&
                                matchesMaxPrice &&
                                matchesStops &&
                                matchesDuration
                            );
                        }),
                    };
                })
                .filter((provider) => provider.flights.length > 0),
        };

        const tableContainer = document.getElementById(
            "flights-table-container"
        );

        // Check if any flights were found
        if (filteredData.providers.length === 0) {
            tableContainer.innerHTML = `
                <div class="no-flights-message">
                    No flights found matching your criteria
                </div>`;
        } else {
            tableContainer.innerHTML = FlightsTable(filteredData);
        }
    }

    // Add event listeners
    searchInput.addEventListener("input", applyFilters);
    minPrice.addEventListener("input", applyFilters);
    maxPrice.addEventListener("input", applyFilters);
    stopsFilter.addEventListener("change", applyFilters);
    durationFilter.addEventListener("change", applyFilters);
}
