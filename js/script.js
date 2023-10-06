const links = document.querySelector(".links")
const dropdown = document.querySelector(".dropdown")
const i = document.querySelector(".fa-solid")
const li = document.querySelector(".li-6")


li.addEventListener("click", ()=>{
   dropdown.classList.toggle("link")
   i.classList.toggle("icon")
})

const menu = document.querySelector(".menu")

menu.addEventListener("click", ()=>{
   menu.classList.toggle("active-menu")
   links.classList.toggle("nav")
})
