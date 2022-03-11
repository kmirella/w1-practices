/* fetch("https://api.weatherapi.com/v1/current.json?q=par&key=3f2f3e1c188b4a60b61101138220803")
    .then((data) => data.json())
    .then((parsed) => {     // több soros parancsokat is megadhatok
        document.getElementById("root").innerHTML = parsed.location.name;  // ha elöl hagyom, már az oldal betöltésekor megjelenik
    });
 */
    let myInput = document.getElementById("cities"); // input

    function onClick() {
        console.log("Hello World");
    }

    myInput.addEventListener("keyup", startType)

    function startType() {
        if (myInput.value.length >= 3) {          // kiolvassa az adatot az inputból
            fetch(`https://api.weatherapi.com/v1/search.json?q=${myInput.value}&key=3f2f3e1c188b4a60b61101138220803`)  // a q után adjuk meg a szöveget, amire keresünk (csak ebben az API-ban)
                .then((data) => data.json())
                .then((parsed) => {     // több soros parancsokat is megadhatok  // a parsed-ba kerül a list of cities
                    // document.getElementById("root").innerHTML = parsed.location.name; 
                  
                    const listOfCities = new Set()
                        let root = document.getElementById("root")
                        root.innerHTML = ""  // lenullázza, hogy ne jelenítse meg az előző keresés eredményeit
                        for (let i = 0; i < parsed.length; i++) {
                            listOfCities.add(parsed[i].region)
                        }
                        for (let city of listOfCities) {
                            root.innerHTML += city;
            
                        } 

                        console.log(listOfCities);
            })
            .catch((e) => {

            })

        }

    }
