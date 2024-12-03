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
                                "https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/16:9/w_2580%2Cc_limit/Amsterdam-GettyImages-840603854.jpg",
                            title: "Amsterdam, Netherlands",
                            description:
                                "You know Amsterdam's oh-so-famous central canal, rightly dubbed a UNESCO World Heritage Site in 2010. Add to that swathes of green spaces, storied red-brick facades, and museums filled with Van Gogh paintings, and you have yourself one of Europe's most gorgeous cultural epicenters.",
                            price: 299.99,
                            tags: ["Popular", "Weekend Special"],
                        },
                        {
                            id: "2",
                            cardDetailLink: "destinations.html#paris",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/5ca50f2719fc38d59c1a31b4/master/w_2580%2Cc_limit/Barcelona_GettyImages-720036297.jpg",
                            title: "Barcelona, Spain",
                            description:
                                "You can't talk about Barcelona without mentioning Antoni Gaudí, the Catalan architect who left his mark all over the city. A walk around town leads you through his undulating stonework and ironwork, which include Park Güell and culminate in his unfinished masterpiece La Sagrada Família. It's not just about colorful mosaics, though: From the mountains to the beach, the historic to the contemporary, sunny Barcelona pretty much has it all.",
                            price: 899.99,
                            tags: ["Espaniol", "Barcelona"],
                        },
                        {
                            id: "3",
                            cardDetailLink: "destinations.html#tokyo",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/5fd0dee324d6251eeb2e5ec7/master/w_2580%2Cc_limit/BestCitiesInTheWorld-2020-Beijing%2C%2520China-GettyImages-700672514.jpg",
                            title: "Beijing, China",
                            description:
                                "Beijing gives visitors a lot to take in—the streets seem that much wider than elsewhere, the population that much denser, at first glance. Even its UNESCO-listed cultural sites sound daunting: the Forbidden City, the Great Wall. That's why we love it though—it's a true feast for the eyes (it also has some of the best dumplings you’ll ever eat).",
                            price: 1099.99,
                            tags: ["China", "Modern"],
                        },
                        {
                            id: "4",
                            cardDetailLink: "destinations.html#tashkent",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/5ca50f277b531a543d949ccb/master/w_2580%2Cc_limit/Beirut_GettyImages-626502584.jpg",
                            title: "Beirut, Lebanon",
                            description:
                                "Beirut's seaside glamour rivals that of any European riviera, with posh beach clubs and rooftop bars, palm tree-lined promenades, and hidden courtyards filled with bougainvillea. But here, glossy high-rises are juxtaposed against centuries-old mosques and souks, giving the city a timeless appeal you won't find anywhere else.",
                            price: 1099.99,
                            tags: ["Lebanon", "Cultural"],
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
                                "https://media.cntraveler.com/photos/5fd0dee83cfe1de2cab7953a/master/w_2580%2Cc_limit/BestCitiesInTheWorld-2020-Bergen%2C%2520Norway-GettyImages-1169113458.jpg",
                            title: "Bergen, Norway",
                            description:
                                "No trip to Norway is complete without a stop in Bergen, the country's second-most populated city. The postcard-perfect town has all the makings of an idyllic Nordic village: ascenic harbor, colorful rows of wooden houses, and sweeping views of the surrounding fjords and mountain group (known as the Seven Mountains).",
                            price: 299.99,
                            tags: ["Around the Water", "Weekend Special"],
                        },
                        {
                            id: "2",
                            cardDetailLink: "destinations.html#paris",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/588a0a4fbc3623e22c9e89de/master/w_2580%2Cc_limit/bruges-Gallery-Stock-GS01079498.jpg",
                            title: "Bruges, Belgium",
                            description:
                                "With its cobblestone streets and peaceful, tree-lined canals, it's not hard to see Bruges as one big fairytale setting come to life. Much of the city's charm lies in its immaculately preserved old city, built between the 12th and 15th centuries; grab a seat at a cafe near the Markt (the historic center square), and plan to linger for the better part of a day.",
                            price: 899.99,
                            tags: ["Featured", "Most Booked"],
                        },
                        {
                            id: "3",
                            cardDetailLink: "destinations.html#tokyo",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/5bd0cb986965116f2b13ad94/master/w_2580%2Cc_limit/Budapest_GettyImages-96169945.jpg",
                            title: "Budapest, Hungary",
                            description:
                                "With some of the best Art Nouveau architecture in Europe, Budapest has no bad angles. Case in point: The city's famous thermal baths, or the gilded, slightly ostentatious Café Gerbeaud. For the very best angle, though, walk the Széchenyi Chain Bridge at night for unforgettable views of the Hungarian Parliament shining over the Danube River.",
                            price: 1099.99,
                            tags: ["New", "Cultural"],
                        },
                        {
                            id: "4",
                            cardDetailLink: "destinations.html#tashkent",
                            cardSize: "lg",
                            imageLink:
                                "https://media.cntraveler.com/photos/5fc66ede013df4de80687b39/master/w_2580%2Cc_limit/Buenos-Aires-GettyImages-1129443180.jpg",
                            title: "Buenos Aires, Argentina",
                            description:
                                "Buenos Aires is often called the 'Paris of South America,' but we think this city is in a class all its own. Design lovers should plan at least one visit to Recoleta Cemetery, then explore the wildly varied architectural styles around every corner—from neoclassical mansions to the brightly painted buildings in La Boca. And let's face it: Everything seems more beautiful to a soundtrack of sizzling asado and flowing Malbec.",
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
