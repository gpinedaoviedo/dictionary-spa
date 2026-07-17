const d = document;

export function mode() {
    const $body = d.getElementById("body-id");
    const $btn = d.querySelector(".btn-mode");
    const $modeTitle = d.getElementById("mode-title")
    const $icon = d.getElementById("mode-icon");
    const $landing = d.querySelector(".landing img");

    //add persistence
    d.addEventListener("DOMContentLoaded", (e)=>{
        //define localStorage
        let mode = "light";
        //validation if localStorage is supported
        try {
            //defining "light" as value default
            mode = localStorage.getItem("mode") || "light";
        } catch (error) {
            console.log("Error al acceder al localStorage: ", error);
        }

        //if - MODE NIGHT, else - MODE LIGHT
        if (mode === "night") {
            $body.classList.add("night-mode");
            $icon.src = `/Diccionario-spa/frontend/assets/sol.png`;
        } else {
            $body.classList.remove("night-mode");
            $icon.src = `/Diccionario-spa/frontend/assets/luna.png`;
        } 
    })

    d.addEventListener("click", (e)=>{
        if (e.target.matches(".btn-mode") || e.target.matches(".btn-mode *")){
            $body.classList.toggle("night-mode");
            if ($body.classList.contains("night-mode")){
                $modeTitle.textContent = ""
                $icon.src = "/Diccionario-spa/frontend/assets/sol.png";
                localStorage.setItem("mode", "night");
                $modeTitle.textContent = "Light";
                $landing.src = "/Diccionario-spa/frontend/assets/landing_img-dark.png";
                
            } else{
                $modeTitle.textContent = ""
                $icon.src = "/Diccionario-spa/frontend/assets/luna.png";
                localStorage.setItem("mode", "light");
                $modeTitle.textContent = "Night"
                $landing.src = "/Diccionario-spa/frontend/assets/landing_img.png";
            }
            const isDarkMode = document.body.classList.contains("night-mode"); 
            $btn.setAttribute("aria-label", 
                isDarkMode 
                ? "Switch to light mode"
                : "Switch to dark mode"
            )
        }
    })
}