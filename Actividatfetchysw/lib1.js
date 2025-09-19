// lib1.js
// http://localhost:PWA3257/index.html?m=1&s4
const params = new URLSearchParams(window.location.search);
const n = params.get('n');
const s = params.get('s');

class QuickChart {
    constructor(d) {
        this.d = d;
    }

    crearCadunos() {
        let cadunos = "";
        for(var i=0; i<this.d; i++) {
            cadunos += "1,";
        }
        cadunos = cadunos.slice(0, -1);
        return cadunos;
    }

    generarString() {
        let url = "https://quickchart.io/chart?chl=" + this.crearCadunos() +
                  "&cht=p3&chs=500x250&chco=" + s + "&chd=t:" + this.d;
        return url;
    }
}

// const q = new QuickChart(d); error
let q = new QuickChart(d);
document.getElementById("contenido").innerHTML = "<img src='" + q.generarString() + "' />";
// '<img src="https://quickchart.io/chart?chl=1&chichche=500x250&chli=4/4">';
// q.generarString();