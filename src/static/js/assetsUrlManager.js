class AssetPathManager {
    constructor(basePath = "src/") {
        this.basePath = basePath;
        this.currentPath = this.getCurrentPageDepth();
    }

    getCurrentPageDepth() {
        const path = window.location.pathname;
        const pathSegments = path
            .split("/")
            .filter((segment) => segment.length > 0);
        return "../".repeat(Math.max(0, pathSegments.length - 1));
    }

    getAssetPath(imageName) {
        return this.currentPath + this.basePath + imageName;
    }

    // New method to update a single element
    updateElement(element) {
        if (element.hasAttribute("data-src")) {
            const originalSrc = element.getAttribute("src");
            element.src = this.getAssetPath(originalSrc);
        }

        if (element.hasAttribute("data-page-href")) {
            const originalHref = element.getAttribute("href");
            element.href = this.getAssetPath(originalHref);
        }

        if (element.hasAttribute("data-img-href")) {
            const originalHref = element.getAttribute("href");
            element.href = this.getAssetPath(originalHref);
        }
    }

    updateSectionHeader(sectionHeader) {
        const link = sectionHeader.querySelector("a[data-page-href]");
        const img = sectionHeader.querySelector("img[data-src]");

        if (link) this.updateElement(link);

        if (img) this.updateElement(img);

        return sectionHeader;
    }

    // Update all elements on the page
    execute() {
        document
            .querySelectorAll(
                "img[data-src], a[data-page-href], a[data-img-href]"
            )
            .forEach((element) => this.updateElement(element));
    }
}

export default AssetPathManager;
