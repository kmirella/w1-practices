function loadEvent() {
    console.log("Az oldal betöltődött")

    const list = document.querySelectorAll("section")

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        `)
        //elem.querySelector("h1").outerHTML = ""
    }
}
window.addEventListener("load", loadEvent)