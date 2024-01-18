
const menu = document.querySelector(".navor");
const button = document.querySelector(".open");
const Close = document.querySelector("#close");

button.addEventListener('click', () =>{
    menu.style.display ="flex";
    Close.style.display ="inline-block";
    button.style.display = "none";

})

const closeNav = () =>{
    menu.style.display = "none";
    Close.style.display = "none";
    button.style.display ="inline-block";
}

Close.addEventListener('click', closeNav)

 
//  ============== DARK-MODE & LIGHT-MODE ===========================

const darkmode = document.querySelector(".moon");
const lightmode = document.querySelector(".sun");
 
 


 let DarkMode = localStorage.getItem("black");

 let enableDarkMode =  () => {
    document.body.classList.add("black");
    localStorage.setItem("black", 'enabled');
 }

 let disableDarkMode =  () => {
    document.body.classList.remove("black");
    localStorage.removeItem("black");
 }

 if(DarkMode === "enabled") {
    enableDarkMode();
 }

 darkmode.addEventListener("click", () => {
    lightmode.style.display = "block";
     darkmode.style.display = "none";
   enableDarkMode()
 })

 lightmode.addEventListener("click", () => {
    darkmode.style.display = "block";   
    lightmode.style.display = "none";
     disableDarkMode();
     localStorage.clear("black");
 })

 