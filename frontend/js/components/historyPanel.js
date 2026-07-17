import { searchWord } from "../helpers/searchWord.js";

const log = [];

export function addHistory(data) {
    const saveLog = document.querySelector(".word-record ul"),
    
    $li = document.createElement("LI");
    $li.classList.add("word-saved");
    
    if (!log.includes(data)){
        log.unshift(data);
        $li.textContent = data;
        saveLog.prepend($li);
    }

    saveLog.addEventListener("click", async (e)=>{
        const li = e.target.closest(".word-saved");

        if (!li) return;
        await searchWord(li.textContent);
    })
}
