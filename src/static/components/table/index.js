function generateFlightRow(providerName, providerLogo, flightData) {
    return `
    <tr>
                    <td class="d-flex gap-1 align-items-center">
                        <img
                            class="row-image"
                            src="${providerLogo}"
                            alt="" />
                        <div>
                            <div class="data-title text-start">${
                                flightData.duration
                            }</div>
                            <div class="data-subtitle text-start">
                               ${providerName}
                            </div>
                        </div>
                    </td>
                    <td class="vertical-align-top">
                        <div class="data-title text-start">${
                            flightData.from
                        }</div>
                    </td>
                    <td>
                        <div class="data-title text-start">${formatStops(
                            flightData
                        )}</div>
                        <div class="data-subtitle text-start">
                            ${formatStopsDuration(flightData) || ""}
                        </div>
                    </td>
                    <td>
                        <div class="data-title text-start">$${
                            flightData.price
                        }</div>
                        <div class="data-subtitle text-start">${
                            flightData.tripType
                        }</div>
                    </td>
                </tr>
    `;
}

function formatStops(flight) {
    if (!flight || typeof flight.stops !== "number") {
        return "Nonstop";
    }

    if (flight.stops === 0) {
        return "Nonstop";
    }

    if (flight.stops === 1) {
        return "1 stop";
    }

    return `${flight.stops} stops`;
}

function formatStopsDuration(flight) {
    if (!flight || typeof flight.stops !== "number") {
        return null;
    }

    if (flight.stops === 0) {
        return null;
    }

    return flight.stopsDuration;
}

/**
 * @function FlightsTable
 * @description Generates an HTML table string for flights data.
 * @param {Object} dataSet - The object containing the data for the table
 * @returns {String} - The HTML string representing the flights table
 */
export function FlightsTable(dataSet) {
    let fetchedRow = "";

    for (let provider of dataSet.providers) {
        const providerName = provider.name;
        const providerLogo = provider.logo;

        for (let flight of provider.flights) {
            fetchedRow += generateFlightRow(providerName, providerLogo, flight);
        }
    }

    return `
        <table class="flights-table">
            <thead>
                <tr>
                    <th>Duration</th>
                    <th>From - To</th>
                    <th>Stops</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${fetchedRow}
            </tbody>
        </table>`;
}

// Modified PricesTable function to work with the new data structure
export function PricesTable(data) {
    // Generate header row
    const headerRow = data.columnDates.map(date => `<th>${date}</th>`).join('');
    
    // Generate table body rows
    const bodyRows = data.rowDates.map((rowDate, rowIndex) => {
        const cells = data.prices[rowIndex].map(price => 
            `<td>$${price.toLocaleString()}</td>`
        ).join('');
        
        return `
            <tr>
                <td>${rowDate}</td>
                ${cells}
            </tr>
        `;
    }).join('');

    return `
    <table class="prices-table">
        <thead>
            <tr>
                <th></th>
                ${headerRow}
            </tr>
        </thead>
        <tbody>
            ${bodyRows}
        </tbody>
    </table>`;
}