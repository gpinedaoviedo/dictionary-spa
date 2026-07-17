import { searchWord } from "../helpers/searchWord.js";

const $result = document.querySelector(".dictionary-result");

export function renderError(word = null){
    const errorTemplate = document.getElementById("error-template").content,
    clone = document.importNode(errorTemplate, true),
    phoneticContainer = document.querySelector(".phonetic-container");

    // clear previews results
    phoneticContainer.innerHTML = "";
    $result.querySelectorAll("section").forEach(section => section.remove());    

    clone.querySelector(".error-title").textContent = "Word not found";

    clone.querySelector(".error-description").textContent = 
    `We couldn't find any results for "${word}".`;

    if (word === null){
        clone.querySelector(".error-title").textContent = "Connection error";
        clone.querySelector(".error-description").textContent = 
        `Please try again later.`;
    }
    $result.appendChild(clone);
}