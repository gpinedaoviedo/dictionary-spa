import { searchWord } from "./searchWord.js";

export function initSearchWord(){
    const $input = document.querySelector(".entry"),
    $form = document.querySelector(".search-form"),
    $layout = document.querySelector(".layout"),
    $landing = document.querySelector(".landing"),
    $logo = document.getElementById("logo");
    
    $form.addEventListener("submit", async (e)=>{
        e.preventDefault(); // not load the page
        const word = $input.value.trim();
        
        if (!word) return;

        $landing.classList.add("hidden");
        $layout.classList.remove("hidden");

        await searchWord(word)
        //clear input entry
        $input.value = "";
    })

    $logo.addEventListener("click", (e)=>{
        e.preventDefault();
        $landing.classList.remove("hidden");
        $layout.classList.add("hidden");    
    })
    
}