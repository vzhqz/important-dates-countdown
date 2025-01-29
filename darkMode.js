const darkModeBtn = document.getElementById("darkModeBtn");
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "active");
}

function disableDarkMode() {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null)
}

if(darkMode === "active") enableDarkMode();

darkModeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});