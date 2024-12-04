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

    // READ
    getAllFlights() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        } catch (error) {
            console.error("Error getting flights:", error);
            return {};
        }
    }
}
export default FlightsTableManager;
