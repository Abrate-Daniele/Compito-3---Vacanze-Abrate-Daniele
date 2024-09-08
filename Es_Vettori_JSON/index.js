var inventario = [
    { nome: "Viti", qta: "20" },
    { nome: "Guanti", qta: "5" },
    { nome: "Chiodi", qta: "13" }
];
function mostraLista() {
    var corpo = document.getElementById('corpoLista');
    corpo.innerHTML = '';
    for (var i = 0; i < inventario.length; i++) {
        var riga = document.createElement('tr');
        riga.innerHTML = '<td>' + inventario[i].nome + '</td><td>' + inventario[i].qta + '</td>' +
                         '<td><button onclick="modifica(' + i + ')">Modifica</button>' +
                         '<button onclick="elimina(' + i + ')">Elimina</button></td>';
        corpo.appendChild(riga);
    }
}
function ordinaNome() {
    inventario.sort(function(a, b) {
        return a.nome > b.nome ? 1 : -1;
    });
    mostraLista();
}
function cerca() {
    var valRic = document.getElementById('ricerca').value.toLowerCase();
    var lista = inventario.filter(function(elemento) {
        return elemento.nome.toLowerCase().includes(valRic);
    });
    var corpo = document.getElementById('corpoLista');
    corpo.innerHTML = '';
    for (var i = 0; i < lista.length; i++) {
        var riga = document.createElement('tr');
        riga.innerHTML = '<td>' + lista[i].nome + '</td><td>' + lista[i].qta + '</td>' +
                         '<td><button onclick="modifica(' + i + ')">Modifica</button>' +
                         '<button onclick="elimina(' + i + ')">Elimina</button></td>';
        corpo.appendChild(riga);
    }
}
function aggiungi() {
    var nome = document.getElementById('articolo').value;
    var qta = document.getElementById('qta').value;
    if (nome !== '' && qta !== '') {
        var indice = document.getElementById('articolo').getAttribute('data-indice');
        if (indice !== null) {
            inventario[indice] = { nome: nome, qta: qta };
            document.getElementById('articolo').removeAttribute('data-indice');
        } else {
            inventario.push({ nome: nome, qta: qta });
        }
        mostraLista();
        pulisciForm();
    }
}
function modifica(indice) {
    document.getElementById('articolo').value = inventario[indice].nome;
    document.getElementById('qta').value = inventario[indice].qta;
    document.getElementById('articolo').setAttribute('data-indice', indice);
}
function elimina(indice) {
    inventario.splice(indice, 1);
    mostraLista();
}
function ordinaPerQta() {
    inventario.sort(function(a, b) {
        return a.qta - b.qta;
    });
    mostraLista();
}
function pulisciForm() {
    document.getElementById('articolo').value = '';
    document.getElementById('qta').value = '';
    document.getElementById('articolo').removeAttribute('data-indice');
}
mostraLista();