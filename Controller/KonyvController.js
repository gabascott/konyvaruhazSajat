import KonyvekView from "../View/KonyvekView.js";
import KonyvPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        console.log("KonyvController");
        //new KonyvekView(); - rossz
        const konyvmodel = new KonyvModel();

        $("#admin").on("click", () => {
            $("main").empty();
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        })

        $("#pub").on("click", () => {
            $("main").empty();
            konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
        })

        $(window).on("modosit", (event) => {
            console.log("Controllerben módosít!", event.detail);
            konyvmodel.adatModosit(event.detail);
        })
        $(window).on("torol", (event) => {
            console.log("Controllerben töröl!", event.detail);
            konyvmodel.adatTorol(event.detail);
        })
    }

    konyvAdatok(tomb) {
        //console.log(tomb);
        let szuloElem = $("main");
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(){
        let szuloElem = $("main");
        new KonyvPublicView(tomb, szuloElem);
    }
}

export default KonyvController;