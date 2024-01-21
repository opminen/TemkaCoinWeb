const main_tabs = document.querySelector(".main__tabs")
const tabs__content = document.querySelectorAll(".main__content")
const tabs__tab = document.querySelectorAll(".main__tabs-tab")

main_tabs.addEventListener("click", e => {
    let id_block = e.target.dataset.lang.substring(0, e.target.dataset.lang.length - 3) + "Content"
    
    tabs__content.forEach(el => {
        el.style.display = "none"
    })

    tabs__tab.forEach(el => {
        el.classList.remove("active")
    })

    e.target.classList.add("active")

    document.querySelector("#" + id_block).style.display = "block"
})