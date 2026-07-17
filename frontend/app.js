import { initSearchWord } from "./js/helpers/searchResult.js";
import { mode } from "./js/components/theme.js";

history.scrollRestoration = "manual";
initSearchWord()

document.addEventListener("DOMContentLoaded", mode);
window.addEventListener("load", () => {
    window.scrollTo(0,0);
})