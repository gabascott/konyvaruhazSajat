class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        this.#elem = elem;
        //console.log(this.#elem);
        szuloElem.append(`
            <tr>
                <td>${elem.id}</td>
                <td>${elem.cim}</td>
                <td>${elem.szerzo}</td>
                <td>${elem.ar}</td>
                <td id="buttonTd"><button id="mod${elem.id}">Módosít</button></td>
                <td id="buttonTd"><button id="del${elem.id}">Töröl</button></td>
            </tr>
        `);
        this.sorElem = szuloElem.children("tr:last-child");
        console.log(this.sorElem);
        this.modositElem=$(`#mod${elem.id}`);
        this.torolElem=$(`#del${elem.id}`);
        this.modositElem.on("click", () => {
            console.log("Módosít a viewban!");
            this.kattintasTrigger("modosit");
        })
        this.torolElem.on("click", () => {
            console.log("Töröl a viewban!");
            this.kattintasTrigger("torol");
        })
    }

    kattintasTrigger(action){
        console.log(action, " a triggerben!")
        const esemeny = new CustomEvent(action, {detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }
}

export default KonyvView;