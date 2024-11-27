import { useAutoSetButtonTitle, useSharedComponents } from "./utils.js";

import { useRouter } from "./router.js";
// Apply the default utility functions
useAutoSetButtonTitle();

document.addEventListener("DOMContentLoaded", () => {
    useSharedComponents();
    useRouter();
});
