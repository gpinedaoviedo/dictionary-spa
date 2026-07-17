import { getWordData } from "../api/dictionaryApi.js";
import { renderPhonetic } from "../components/phonetic.js";
import { renderMeanings } from "../components/dictionaryResult.js";
import { addHistory } from "../components/historyPanel.js";
import { renderError } from "../components/error.js";

export async function searchWord(word) {
    try {
        const $wordSearched = document.getElementById("word-searched");
        const data = await getWordData(word);

        $wordSearched.textContent = data.word;

        addHistory(data.word);
        renderPhonetic(data);
        renderMeanings(data);
    } catch (error) {
        error.message === "404" ? renderError(word) : renderError();
    }
}