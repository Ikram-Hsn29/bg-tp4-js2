"use strict"; // Slide 51 : mode strict

// Slide 39 : tableau d'objets
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Slide 51 : variables let
let lignes = 0;
let total_points = 0;

// Slide 45 : fonction JavaScript
function doInsertRowTable(num, nom, prenom, points) {

    // Slide 61 : getElementById()
    const tbody = document.getElementById("table_body");

    // Slide 104 : création dynamique d'un élément HTML
    const tr = document.createElement("tr");

    const td_num = document.createElement("td");

    // Slide 91 : modification du contenu texte
    td_num.innerText = num;

    // Slide 106 : setAttribute()
    td_num.setAttribute("class", "col_number");

    const td_nom = document.createElement("td");
    td_nom.innerText = nom;
    td_nom.setAttribute("class", "col_text");

    const td_prenom = document.createElement("td");
    td_prenom.innerText = prenom;
    td_prenom.setAttribute("class", "col_text");

    const td_points = document.createElement("td");
    td_points.innerText = points;
    td_points.setAttribute("class", "col_number");

    const td_select = document.createElement("td");
    td_select.setAttribute("class", "col_chkbox");

    // Slide 104 : création d'un élément input
    const checkbox = document.createElement("input");

    // Slide 106 : modification d'attribut HTML
    checkbox.setAttribute("type", "checkbox");

    // Slide 99 : ajout d'un élément enfant
    td_select.appendChild(checkbox);

    // Slide 99 : ajout des cellules
    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prenom);
    tr.appendChild(td_points);
    tr.appendChild(td_select);

    // Slide 103 : insertion dans le DOM
    tbody.appendChild(tr);
}

// Slide 45 : fonction
function doInsert(nom, prenom, points) {

    lignes++;

    total_points += Number(points);

    doInsertRowTable(lignes, nom, prenom, points);

    update_summary();
}

// Slide 44 : boucle de parcours
function init() {

    for (const person of persons) {

        doInsert(
            person.nom,
            person.prenom,
            person.points
        );
    }
}

// Slide 33 : affichage console
function consoleTableau() {

    console.table(persons);

}

// Slide 61 : récupération d'éléments HTML
// Slide 91 : modification du contenu texte
function update_summary() {

    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    if (element_lignes !== null) {
        element_lignes.innerText = lignes + " ligne(s)";
    }

    if (element_points !== null) {
        element_points.innerText =
            "Totale point(s)= " + total_points;
    }
}

// Slide 45 : fonction JavaScript
function doNewData() {

    // Slide 61 : récupération des champs du formulaire
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Slide 42 : condition if
    if (
        nom.trim() === "" ||
        prenom.trim() === "" ||
        elt_points.value.trim() === "" ||
        Number.isNaN(points)
    ) {

        // Slide 116 : alert()
        alert("Formulaire incomplet !");
    }
    else {

        doInsert(nom, prenom, points);

        // Slide 39 : ajout dans un tableau d'objets
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });

        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

// Slide 45 : fonction JavaScript
function deleteRow() {

    // Slide 42 : condition
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Slide 61 : récupération du tbody
    const tbody = document.getElementById("table_body");

    // Slide 76 : sélection avec querySelectorAll()
    const checkboxes = tbody.querySelectorAll(
        ".col_chkbox input[type='checkbox']"
    );

    let selection = false;

    // Slide 44 : parcours d'une collection
    checkboxes.forEach(function(checkbox) {

        if (checkbox.checked) {
            selection = true;
        }

    });

    if (selection === false) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Slide 116 : boîte de confirmation
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return;
    }

    const rows = tbody.querySelectorAll("tr");

    // Slide 44 : boucle for
    for (let i = rows.length - 1; i >= 0; i--) {

        const checkbox = rows[i].querySelector(
            "input[type='checkbox']"
        );

        if (checkbox.checked) {

            const points =
                parseInt(rows[i].cells[3].innerText);

            total_points -= points;

            lignes--;

            persons.splice(i, 1);

            // Slide 100 : suppression d'un élément du DOM
            rows[i].remove();
        }
    }

    update_summary();

    alert("Suppression effectuée avec succès !");
}

// Initialisation de la page
init();