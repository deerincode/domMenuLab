// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ]

let mainEl = document.querySelector("main")

let mainBG = "var(--main-bg)"
mainEl.style.setProperty("background-color", mainBG)

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")

let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.setProperty("height", "100%")
topMenuEl.style.setProperty("background-color", "var(--top-menu-bg")

topMenuEl.classList.add("flex-around")


// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.


for (const link of menuLinks) {
    const newAnchor = document.createElement("a") // creates a new anchor element and assigns to a variable
    newAnchor.href = link.href // sets the href attribute within the anchor tag
    newAnchor.textContent = link.text // adds text between the open/closing of anchor tag
    topMenuEl.appendChild(newAnchor) // adds the anchor element to the nav bar
}

let subMenuEl = document.getElementById("sub-menu")
let subMenuBg = "var(--sub-menu-bg)"

subMenuEl.style.setProperty("height","100%")
subMenuEl.style.setProperty("background-color",subMenuBg)

subMenuEl.classList.add("flex-around")

subMenuEl.style.setProperty("position", "absolute")
subMenuEl.style.setProperty("top", "0")

let topMenuLinks = document.getElementsByTagName("a")
console.log(topMenuLinks)

let showingSubMenu = false

