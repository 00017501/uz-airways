class DestinationCardManager {
    constructor() {
        this.storageKey = "destinations";
        // Initialize storage with default cards if empty
        if (!localStorage.getItem(this.storageKey)) {
            this.initializeDefaultCards();
        }
    }

    // Default cards data
    getDefaultCards() {
        return {
            sections: [
                {
                    title: "Find your next adventure with these flight deals",
                    keyWords: "flight deals",
                    redirectLink: "/destinations.html",
                    keyColor: "purple",
                    cards: [
                        {
                            id: "1",
                            cardDetailLink: "destinations.html#new-york",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-baskincreativeco-1766838.jpg",
                            title: "New York City Weekend Getaway",
                            description:
                                "Experience the magic of NYC with our special weekend packages including Broadway shows and city tours",
                            price: 299.99,
                            tags: ["Popular", "Weekend Special"],
                        },
                        {
                            id: "2",
                            cardDetailLink: "destinations.html#paris",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-david-besh-884788.jpg",
                            title: "Paris Explorer Package",
                            description:
                                "7 days in the City of Light with guided tours and Seine River cruise",
                            price: 899.99,
                            tags: ["Featured", "Most Booked"],
                        },
                        {
                            id: "3",
                            cardDetailLink: "destinations.html#tokyo",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-fotios-photos-1921336.jpg",
                            title: "Tokyo Adventure",
                            description:
                                "Explore the vibrant culture of Tokyo with our guided city tours",
                            price: 1099.99,
                            tags: ["New", "Cultural"],
                        },
                        {
                            id: "4",
                            cardDetailLink: "destinations.html#tashkent",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-pixabay-459203.jpg",
                            title: "Tokyo Adventure",
                            description:
                                "Explore the vibrant culture of Tokyo with our guided city tours",
                            price: 1099.99,
                            tags: ["New", "Cultural"],
                        },
                    ],
                },


                {
                    title: "Explore unique places to stay",
                    keyWords: "places to stay",
                    redirectLink: "/unique-destinations",
                    keyColor: "green",
                    cards: [
                        {
                            id: "1",
                            cardDetailLink: "destinations.html#new-york",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-baskincreativeco-1766838.jpg",
                            title: "New York City Weekend Getaway",
                            description:
                                "Experience the magic of NYC with our special weekend packages including Broadway shows and city tours",
                            price: 299.99,
                            tags: ["Popular", "Weekend Special"],
                        },
                        {
                            id: "2",
                            cardDetailLink: "destinations.html#paris",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-david-besh-884788.jpg",
                            title: "Paris Explorer Package",
                            description:
                                "7 days in the City of Light with guided tours and Seine River cruise",
                            price: 899.99,
                            tags: ["Featured", "Most Booked"],
                        },
                        {
                            id: "3",
                            cardDetailLink: "destinations.html#tokyo",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-fotios-photos-1921336.jpg",
                            title: "Tokyo Adventure",
                            description:
                                "Explore the vibrant culture of Tokyo with our guided city tours",
                            price: 1099.99,
                            tags: ["New", "Cultural"],
                        },
                        {
                            id: "4",
                            cardDetailLink: "destinations.html#tashkent",
                            cardSize: "lg",
                            imageLink:
                                "wonderful_places/pexels-pixabay-459203.jpg",
                            title: "Tokyo Adventure",
                            description:
                                "Explore the vibrant culture of Tokyo with our guided city tours",
                            price: 1099.99,
                            tags: ["New", "Cultural"],
                        },
                    ],
                },
            ],
        };
    }

    // Initialize storage with default cards
    initializeDefaultCards() {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.getDefaultCards())
        );
    }

    // CREATE
    createCard(cardData) {
        try {
            const cards = this.getAllCards();
            const newCard = {
                id: `dest-${Date.now()}`,
                cardSize: "lg", // default size
                ...cardData,
                createdAt: Date.now(),
            };

            cards.push(newCard);
            localStorage.setItem(this.storageKey, JSON.stringify(cards));
            return newCard;
        } catch (error) {
            console.error("Error creating card:", error);
            throw error;
        }
    }

    // READ
    getAllCards() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        } catch (error) {
            console.error("Error getting cards:", error);
            return {};
        }
    }

    getCardById(id) {
        try {
            const cards = this.getAllCards();
            return cards.find((card) => card.id === id);
        } catch (error) {
            console.error("Error getting card:", error);
            return null;
        }
    }

    // UPDATE
    updateCard(id, updates) {
        try {
            const cards = this.getAllCards();
            const index = cards.findIndex((card) => card.id === id);

            if (index === -1) {
                throw new Error("Card not found");
            }

            cards[index] = {
                ...cards[index],
                ...updates,
                updatedAt: Date.now(),
            };

            localStorage.setItem(this.storageKey, JSON.stringify(cards));
            return cards[index];
        } catch (error) {
            console.error("Error updating card:", error);
            throw error;
        }
    }

    // DELETE
    deleteCard(id) {
        try {
            const cards = this.getAllCards();
            const filteredCards = cards.filter((card) => card.id !== id);
            localStorage.setItem(
                this.storageKey,
                JSON.stringify(filteredCards)
            );
            return true;
        } catch (error) {
            console.error("Error deleting card:", error);
            throw error;
        }
    }

    // QUERY methods
    getCardsByPriceRange(minPrice, maxPrice) {
        try {
            const cards = this.getAllCards();
            return cards.filter(
                (card) => card.price >= minPrice && card.price <= maxPrice
            );
        } catch (error) {
            console.error("Error querying cards:", error);
            return [];
        }
    }

    getCardsByTag(tag) {
        try {
            const cards = this.getAllCards();
            return cards.filter((card) => card.tags && card.tags.includes(tag));
        } catch (error) {
            console.error("Error querying cards:", error);
            return [];
        }
    }

    // Reset to default cards
    resetToDefault() {
        try {
            this.initializeDefaultCards();
            return this.getAllCards();
        } catch (error) {
            console.error("Error resetting cards:", error);
            throw error;
        }
    }

    // Clear all cards
    clearAll() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error("Error clearing cards:", error);
            throw error;
        }
    }
}

// Usage examples:
/*
   const cardManager = new DestinationCardManager();
   
   // Get all cards
   const allCards = cardManager.getAllCards();
   
   // Create a new card
   const newCard = cardManager.createCard({
    cardDetailLink: "/flights/dubai",
    imageLink: "https://example.com/images/dubai.jpg",
    title: "Dubai Luxury Experience",
    description: "5-star luxury experience in Dubai",
    price: 1299.99,
    tags: ["Luxury", "New"]
   });
   
   // Update a card
   const updatedCard = cardManager.updateCard('dest-001', {
    price: 349.99,
    description: "Updated description"
   });
   
   // Delete a card
   cardManager.deleteCard('dest-001');
   
   // Query cards
   const affordableCards = cardManager.getCardsByPriceRange(0, 500);
   const featuredCards = cardManager.getCardsByTag('Featured');
   
   // Reset to default
   cardManager.resetToDefault();
   */

export default DestinationCardManager;
