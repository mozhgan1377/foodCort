
let topMenuBtn = document.querySelector(".top-menu-btn");
let topMenu = document.querySelector(".top-menu");
let cover = document.querySelector(".cover");
let menuSectionItems = document.querySelectorAll(".menu-section-list__item")
let topMenuItems = document.querySelectorAll(".top-menu__item")
let sections = document.querySelectorAll("main > section")
let saleFoods = document.querySelectorAll(".sale-off-food")

topMenuBtn.addEventListener("click",function(){
    topMenuBtn.classList.toggle("top-menu-btn--open");
    topMenu.classList.toggle("top-menu--open");
    cover.classList.toggle("cover--show");
})

function removeActiveClass(className) {document.querySelector(`.${className}`).classList.remove(className)}


menuSectionItems.forEach(menuSectionItem => {
  menuSectionItem.addEventListener("click",function(){
  removeActiveClass("menu-section-list__item--selected");
  removeActiveClass("food__wrapper--show");
  this.classList.add("menu-section-list__item--selected");
  let menuContentId = menuSectionItem.getAttribute("menu-content-id");
  document.querySelector(menuContentId).classList.add("food__wrapper--show");
  })
})


topMenuItems.forEach(topMenuItem => {
    topMenuItem.addEventListener("click",function(event){
        event.preventDefault()
        removeActiveClass("top-menu__item--selected")
        this.classList.add("top-menu__item--selected")
        let sectionContent = this.getAttribute("section-content")
        let sectionOffsetTop = document.querySelector(`.${sectionContent}`).offsetTop
        window.scrollTo({
          top : sectionOffsetTop - 56,
          behavior:"smooth"
        })
    })
})


const observer = new IntersectionObserver(observeHandler,{thereshould:.3})
function observeHandler(sections){
  sections.map(section => {
    let sectionClassName = section.target.className
    let sectionTopMenuItem = document.querySelector(`.top-menu__item[section-content=${sectionClassName}]`)
    if(section.isIntersecting){
      sectionTopMenuItem.classList.add("top-menu__item--selected")
    }else{
      sectionTopMenuItem.classList.remove("top-menu__item--selected")
    }

  })
}

saleFoods.forEach(saleFood => {
  saleFood.addEventListener("click",function(){
  removeActiveClass("sale-off-food--selected");
  this.classList.add("sale-off-food--selected");
  })
})


