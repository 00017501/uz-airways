class PricesTableManager {
    constructor() {
        this.storageKey = "prices";
        // Initialize storage with default prices if empty
        if (!localStorage.getItem(this.storageKey)) {
            this.initializeDefaultPrices();
        }
    }

    // Default prices data structure
    getDefaultPrices() {
        return {
            departureRange: {
                start: "2024-02-12",
                end: "2024-02-16"
            },
            returnRange: {
                start: "2024-03-07",
                end: "2024-03-11"
            },
            priceMatrix: [
                {
                    departureDate: "2024-02-12",
                    prices: [
                        { returnDate: "2024-03-07", price: 837 },
                        { returnDate: "2024-03-08", price: 837 },
                        { returnDate: "2024-03-09", price: 624 },
                        { returnDate: "2024-03-10", price: 1308 },
                        { returnDate: "2024-03-11", price: 592 }
                    ]
                },
                {
                    departureDate: "2024-02-13",
                    prices: [
                        { returnDate: "2024-03-07", price: 592 },
                        { returnDate: "2024-03-08", price: 592 },
                        { returnDate: "2024-03-09", price: 592 },
                        { returnDate: "2024-03-10", price: 624 },
                        { returnDate: "2024-03-11", price: 624 }
                    ]
                },
                {
                    departureDate: "2024-02-14",
                    prices: [
                        { returnDate: "2024-03-07", price: 592 },
                        { returnDate: "2024-03-08", price: 592 },
                        { returnDate: "2024-03-09", price: 624 },
                        { returnDate: "2024-03-10", price: 624 },
                        { returnDate: "2024-03-11", price: 1308 }
                    ]
                },
                {
                    departureDate: "2024-02-15",
                    prices: [
                        { returnDate: "2024-03-07", price: 1308 },
                        { returnDate: "2024-03-08", price: 837 },
                        { returnDate: "2024-03-09", price: 592 },
                        { returnDate: "2024-03-10", price: 837 },
                        { returnDate: "2024-03-11", price: 837 }
                    ]
                },
                {
                    departureDate: "2024-02-16",
                    prices: [
                        { returnDate: "2024-03-07", price: 837 },
                        { returnDate: "2024-03-08", price: 1308 },
                        { returnDate: "2024-03-09", price: 592 },
                        { returnDate: "2024-03-10", price: 837 },
                        { returnDate: "2024-03-11", price: 624 }
                    ]
                }
            ]
        };
    }

    initializeDefaultPrices() {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.getDefaultPrices())
        );
    }

    getAllPrices() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        } catch (error) {
            console.error("Error getting prices:", error);
            return {};
        }
    }

    // Format date from YYYY-MM-DD to M/D
    formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }

    // Get formatted data for the table
    getFormattedTableData() {
        const rawData = this.getAllPrices();
        
        // Get unique departure and return dates
        const columnDates = rawData.priceMatrix.map(day => 
            this.formatDate(day.departureDate)
        );

        const rowDates = rawData.priceMatrix[0].prices.map(price => 
            this.formatDate(price.returnDate)
        );

        // Create prices matrix
        const prices = rowDates.map((returnDate, rowIndex) => 
            columnDates.map((_, colIndex) => 
                rawData.priceMatrix[colIndex].prices[rowIndex].price
            )
        );

        return {
            columnDates,
            rowDates,
            prices
        };
    }
}

export default PricesTableManager;