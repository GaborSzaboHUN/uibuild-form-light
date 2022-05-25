const loginPage = function () {
    return `
        <section class="form-group">
            <h1>Visszajelzés</h1>
            <input class="subject" type="text" placeholder="Tárgy">
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Megjegyzés"></textarea>

            <div class="checkbox-group">
                <input type="checkbox" id="checkbox">
                <p class="privacy-policy">Elolvastam és elfogadom az <a target="_blank" href="#">Adatkezelési
                        Tájékoztatót</a></p>
            </div>

            <button>MENTÉS</button>
        </section>
    `
}




const loadElement = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", loginPage())
}

window.addEventListener("load", loadElement)
