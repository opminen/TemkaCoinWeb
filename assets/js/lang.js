let allowLang = ["ua", "ru", "en"]

const select = document.querySelector(".header__lang")

select.value = window.location.hash.substring(1)

select.addEventListener("change", () => {
    location.href = window.location.pathname + "#" + select.value
    location.reload()
})

fetch("./lang.json").then(data => {
    return data.json()
}).then(data => {
    changeLang(data)
})


function changeLang(data) {
    let hash = window.location.hash.substring(1)

    if(!allowLang.includes(hash)) {
        location.href = window.location.pathname + "#en"
        location.reload()
    }

    document.querySelectorAll("*[data-lang]").forEach(el => {
        el.textContent = data[el.dataset.lang][hash]
    })
}
