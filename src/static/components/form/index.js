export default function Form() {
    return `
            <div class="d-flex gap-4 mt-4 container registration-wrapper">
                <!-- Form Column -->
                <div class="w-100">
                    <form action="" id="passengerForm">
                        <h1 class="text-gradient-purple mb-1">
                            Passenger information
                        </h1>
                        <p class="mb-4">
                            Enter the required information for each traveler and
                            be sure that it exactly matches the
                            government-issued ID presented at the airport.
                        </p>

                        <div class="mb-4">
                            <h2 class="mb-3">Passenger</h2>

                            <div class="d-flex gap-2 mb-2">
                                <div class='d-flex flex-column w-100'>
                                    <input
                                        required
                                        type="text"
                                        placeholder="First name*"
                                        id="firstName"
                                        class="w-100 form-control" />
                                </div> 
                                <div class='d-flex flex-column w-100'>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Last name*"
                                        id="lastName"
                                        class="w-100 form-control" />
                                </div>
                            </div>

                            <div class="d-flex gap-2 mb-2">
                                <input
                                    type="date"
                                    placeholder="Date of birth*"
                                    id="departureDate"
                                    class="w-100 form-control" />
                            </div>
                            <div class="mb-2">
                                <select
                                    name=""
                                    class="w-100 form-control"
                                    id="destinationSelect">
                                    <option value="">Select destination</option>
                                </select>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="w-100">
                    <div class="form-visual d-flex flex-column"></div>
                </div>
            </div>
    `;
}
