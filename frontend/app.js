import { initSearchWord } from "./js/services/searchResult.js";
import { mode } from "./js/components/theme.js";

history.scrollRestoration = "manual";
initSearchWord()

document.addEventListener("DOMContentLoaded", mode);
window.addEventListener("load", () => {
    window.scrollTo(0,0);
})