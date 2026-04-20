import { renderHTML, section, extensions } from "./genratehtml.js";


const mode = document.querySelector(".mode");
const filterBtn = document.querySelectorAll(".filter-btn");
let  btnFilter = "all";

renderHTML();



function theme() {
 let themes = localStorage.getItem("themes");
  if (themes === "light") {
    document.body.classList.add("lightmode");
  }
}

mode.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
  if (document.body.classList.contains("lightmode")) {
    localStorage.setItem("themes", "light");
  } else {
    localStorage.setItem("themes", "dark");
  }
});

theme();


filterBtn.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    filterBtn.forEach((b)=>{
      return b.classList.remove("active");
    })
    btn.classList.add("active");
    btnFilter = btn.dataset.filter;
   renderHTML(btnFilter);
  })
})


section.addEventListener("click" , (e)=>{
  if(e.target.closest(".remove")){
    const card = e.target.closest(".extension-card");
    const name = card.querySelector("h2").textContent;
    const index = extensions.find((ext)=>{
      return ext.name === name;
    })

    extensions.splice(index , 1);
    localStorage.setItem("extensionNames" , JSON.stringify(extensions));
    card.remove();
  }
})

section.addEventListener("change" , (e)=>{
   if(e.target.closest(".checkbox")){
    const input = e.target.closest(".checkbox");
    const card = e.target.closest(".extension-card");
    const name = card.querySelector("h2").textContent;
   
     const index = extensions.find((ext)=>{
      return ext.name === name;
    })
     index.active = input.checked;

    localStorage.setItem("extensionNames", JSON.stringify(extensions));
    renderHTML(btnFilter);
  
   }
})

