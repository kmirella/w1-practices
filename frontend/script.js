

async function loadEvent() {
    console.log("Az oldal betöltődött")

    const root = document.querySelector("#root")

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    //console.log(countryArr[0].name.common)

    for (const country of countryArr) {

       //console.log(country.name.common);

       root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${country.name.common}</h1>
                <p>${country.region}</p>
            </section>
        `)
        
    }
}
window.addEventListener("load", loadEvent)