export function renderPhonetic(data) {
    // Phonetic Container
    const phoneticWord = document.querySelector(".phonetic-word");
    const playBtn = document.getElementById("play-btn");

    let audio = null; 

    //clear
    phoneticWord.textContent = "";

    // Phonetic Data
    for (const elem of data.phonetics) {
        
        if (!elem.text || !elem.audio) continue; 
        
        audio = new Audio(elem.audio);
        phoneticWord.textContent = elem.text; 
        break;
    };

    playBtn.disabled = !audio;
    playBtn.style.display = audio ? "flex" : "none";

    playBtn.onclick = () => {
        audio.play();
    }
}
