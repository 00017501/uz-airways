class FlightsTableManager {
    constructor() {
        this.storageKey = "flights";
        // Initialize storage with default flights if empty
        if (!localStorage.getItem(this.storageKey)) {
            this.initializeDefaultFlights();
        }
    }

    // Default flights data
    getDefaultFlights() {
        return {
            providers: [
                {
                    name: "Delta Airlines",
                    logo: "./src/assets/table/flight list/table/flight list/Delta Airlines.png",
                    flights: [
                        {
                            duration: "12h 25m",
                            from: "7:00AM - 4:15PM",
                            stops: 5,
                            stopsDuration: "2h 45m",
                            price: 530,
                            tripType: "round trip",
                        },
                        {
                            duration: "8h 33m",
                            from: "7:00AM - 4:15PM",
                            stops: 0,
                            stopsDuration: "2h 45m",
                            price: 636,
                            tripType: "round trip",
                        },
                        {
                            duration: "3h 15m",
                            from: "7:00AM - 4:15PM",
                            stops: 2,
                            stopsDuration: "2h 45m",
                            price: 129,
                            tripType: "round trip",
                        },
                    ],
                },
                {
                    name: "Hawaiian Airlines",
                    logo: "./src/assets/table/flight list/Hawaiian Airlines.png",
                    flights: [
                        {
                            duration: "14h 32m",
                            from: "00:45AM - 4:15PM",
                            stops: 1,
                            stopsDuration: "1h 24m",
                            price: 961,
                            tripType: "round trip",
                        },
                        {
                            duration: "13h 41m",
                            from: "7:00AM - 4:15PM",
                            stops: 3,
                            stopsDuration: "2h 45m",
                            price: 89,
                            tripType: "round trip",
                        },
                        {
                            duration: "19h 14m",
                            from: "7:00AM - 4:15PM",
                            stops: 2,
                            stopsDuration: "2h 45m",
                            price: 389,
                            tripType: "round trip",
                        },
                    ],
                },
            ],
        };
    }

    // Initialize storage with default flights
    initializeDefaultFlights() {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.getDefaultFlights())
        );
    }

    // CREATE
    createFlight(flightData) {
        try {
            const flights = this.getAllFlights();
            const newFlight = {
                id: `dest-${Date.now()}`,
                ...flightData,
                createdAt: Date.now(),
            };

            flights.push(newFlight);
            localStorage.setItem(this.storageKey, JSON.stringify(flights));
            return newFlight;
        } catch (error) {
            console.error("Error creating flight:", error);
            throw error;
        }
    }

    // READ
    getAllFlights() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        } catch (error) {
            console.error("Error getting flights:", error);
            return {};
        }
    }

    getFlightById(id) {
        try {
            const flights = this.getAllFlights();
            return flights.find((flight) => flight.id === id);
        } catch (error) {
            console.error("Error getting flight:", error);
            return null;
        }
    }

    // UPDATE
    updateFlight(id, updates) {
        try {
            const flights = this.getAllFlights();
            const index = flights.findIndex((flight) => flight.id === id);

            if (index === -1) {
                throw new Error("Flight not found");
            }

            flights[index] = {
                ...flights[index],
                ...updates,
                updatedAt: Date.now(),
            };

            localStorage.setItem(this.storageKey, JSON.stringify(flights));
            return flights[index];
        } catch (error) {
            console.error("Error updating flight:", error);
            throw error;
        }
    }

    // DELETE
    deleteFlight(id) {
        try {
            const flights = this.getAllFlights();
            const filteredFlights = flights.filter(
                (flight) => flight.id !== id
            );
            localStorage.setItem(
                this.storageKey,
                JSON.stringify(filteredFlights)
            );
            return true;
        } catch (error) {
            console.error("Error deleting flight:", error);
            throw error;
        }
    }

    // QUERY methods
    getFlightsByPriceRange(minPrice, maxPrice) {
        try {
            const flights = this.getAllFlights();
            return flights.filter(
                (flight) => flight.price >= minPrice && flight.price <= maxPrice
            );
        } catch (error) {
            console.error("Error querying flights:", error);
            return [];
        }
    }

    getFlightsByTag(tag) {
        try {
            const flights = this.getAllFlights();
            return flights.filter(
                (flight) => flight.tags && flight.tags.includes(tag)
            );
        } catch (error) {
            console.error("Error querying flights:", error);
            return [];
        }
    }

    // Reset to default flights
    resetToDefault() {
        try {
            this.initializeDefaultFlights();
            return this.getAllFlights();
        } catch (error) {
            console.error("Error resetting flights:", error);
            throw error;
        }
    }

    // Clear all flights
    clearAll() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error("Error clearing flights:", error);
            throw error;
        }
    }
}
export default FlightsTableManager;
