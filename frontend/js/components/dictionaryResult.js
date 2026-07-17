import { createDefinitionsItem, createTermsItem } from "../components/meaning.js";
import { searchWord } from "../services/searchWord.js";
import { capitalize } from "../utils/capitalize.js";

const $result = document.querySelector(".dictionary-result");

$result.addEventListener("click", async (e) => {
    e.preventDefault();

    const link = e.target.closest(".term-link");
    if (!link) return;

    const word = link.textContent; 
    window.scrollTo(0, 0);
    await searchWord(word);
});

export function renderMeanings(data) {

    const fragment = document.createDocumentFragment(),
    $template = document.getElementById("meaning-template").content;

    //clear word searched results
    $result.querySelectorAll("section").forEach(section => section.remove());    
    
    for (const elem of data.meanings){
        let clone = document.importNode($template, true);

        //insert data
        clone.querySelector(".partOfSpeech-title").textContent =  capitalize(elem.part_of_speech);
        const synonymContainer = clone.querySelector(".synonyms");
        const antonymContainer = clone.querySelector(".antonyms");

        if (elem.synonyms.length){
            synonymContainer.appendChild(createTermsItem(elem.synonyms));
        }
        if (elem.antonyms.length){
            antonymContainer.appendChild(createTermsItem(elem.antonyms));
        }


        const ol = clone.querySelector(".meanings-container ol");

        for (const definition of elem.definitions){
            ol.appendChild(createDefinitionsItem(definition));               
        }
        fragment.appendChild(clone);
    }
    $result.appendChild(fragment)

}