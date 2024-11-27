export function SpinnerLoader(text) {
    const loaderWrapper = document.createElement("div");
    loaderWrapper.className = "loader-wrapper";

    const loader = document.createElement("div");
    loader.className = "loader";

    const span = document.createElement("span");
    span.textContent = text;

    loaderWrapper.appendChild(loader);
    loaderWrapper.appendChild(span);

    return loaderWrapper;
}
