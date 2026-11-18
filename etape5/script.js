
"use strict";

// ==========================================
// ETAPE 3 : TABLEAU D'OBJETS
// ==========================================

// Tableau contenant les objets Person
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Compteur du nombre de lignes
let lignes = 0;

// Total des points
let total_points = 0;


// Fonction d'insertion d'une ligne dans le tableau HTML
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer le tbody du tableau
    const tbody = document.getElementById("table_body");

    // Créer une nouvelle ligne
    const tr = document.createElement("tr");

    // Créer la cellule Numéro
    const td_num = document.createElement("td");
    td_num.innerText = num;
    td_num.setAttribute("class", "col_number");

    // Créer la cellule Nom
    const td_nom = document.createElement("td");
    td_nom.innerText = nom;
    td_nom.setAttribute("class", "col_text");

    // Créer la cellule Prénom
    const td_prenom = document.createElement("td");
    td_prenom.innerText = prenom;
    td_prenom.setAttribute("class", "col_text");

    // Créer la cellule Points
    const td_points = document.createElement("td");
    td_points.innerText = points;
    td_points.setAttribute("class", "col_number");

    // Créer la cellule Select
    const td_select = document.createElement("td");
    td_select.setAttribute("class", "col_chkbox");

    // Créer une checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    td_select.appendChild(checkbox);

    // Ajouter les cellules à la ligne
    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prenom);
    tr.appendChild(td_points);
    tr.appendChild(td_select);

    // Ajouter la ligne au tableau
    tbody.appendChild(tr);
}


// Fonction qui insère une personne
function doInsert(nom, prenom, points) {

    // Incrémenter le nombre de lignes
    lignes++;

    // Ajouter les points au total
    total_points += Number(points);

    // Insérer la ligne dans le tableau
    doInsertRowTable(lignes, nom, prenom, points);

    // Mettre à jour le résumé
    update_summary();
}


// Fonction d'initialisation du tableau
function init() {

    // Parcourir le tableau persons
    for (const person of persons) {

        // Insérer chaque personne dans le tableau HTML
        doInsert(person.nom, person.prenom, person.points);
    }
}


// Afficher le tableau persons dans la console
function consoleTableau() {

    console.table(persons);
}


// ==========================================
// ETAPE 4 : ESPACE RESUME
// ==========================================

function update_summary() {

    // Récupérer les éléments du résumé
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // Afficher le nombre de lignes
    if (element_lignes !== null) {
        element_lignes.innerText = lignes + " ligne(s)";
    }

    // Afficher le total des points
    if (element_points !== null) {
        element_points.innerText = "Totale point(s)= " + total_points;
    }
}


// ==========================================
// ETAPE 5 : INSERTION VIA FORMULAIRE
// ==========================================

function doNewData() {

    // Récupérer les éléments du formulaire
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Récupérer les valeurs saisies
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Vérifier si les champs sont vides ou si les points ne sont pas valides
    if (
        nom.trim() === "" ||
        prenom.trim() === "" ||
        elt_points.value.trim() === "" ||
        Number.isNaN(points)
    ) {

        alert("Formulaire incomplet !");
    }
    else {

        // Insérer les nouvelles données dans le tableau HTML
        doInsert(nom, prenom, points);

        // Insérer les nouvelles données dans le tableau persons
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });

        // Vider les champs du formulaire
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}


// ==========================================
// ETAPE 6 : SUPPRESSION DES LIGNES
// SELECTIONNEES
// ==========================================

function deleteRow() {

    // Etape 1 : Vérifier si le tableau est vide
    if (lignes === 0) {

        alert("Le tableau est vide !");
        return;
    }

    // Etape 2 : Récupérer le tableau et les checkboxes cochées
    const tbody = document.getElementById("table_body");

    const checkboxes = tbody.querySelectorAll(
        ".col_chkbox input[type='checkbox']"
    );

    // Etape 3 : Vérifier si aucune checkbox n'est cochée
    let selection = false;

    checkboxes.forEach(function(checkbox) {

        if (checkbox.checked) {
            selection = true;
        }
    });

    if (selection === false) {

        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Etape 4 : Demander confirmation avant suppression
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return;
    }

    // Etape 5 : Récupérer toutes les lignes du tableau
    const rows = tbody.querySelectorAll("tr");

    // Etape 6 : Parcourir les lignes en ordre inverse
    for (let i = rows.length - 1; i >= 0; i--) {

        const checkbox = rows[i].querySelector(
            "input[type='checkbox']"
        );

        // Vérifier si la checkbox est cochée
        if (checkbox.checked) {

            // Récupérer les points dans la 4ème cellule
            const points = parseInt(rows[i].cells[3].innerText);

            // Soustraire les points du total
            total_points -= points;

            // Décrémenter le nombre de lignes
            lignes--;

            // Supprimer la même entrée du tableau persons
            persons.splice(i, 1);

            // Supprimer la ligne du DOM
            rows[i].remove();
        }
    }

    // Etape 7 : Mettre à jour le résumé
    update_summary();

    // Afficher un message de succès
    alert("Suppression effectuée avec succès !");
}


// ==========================================
// INITIALISATION
// ==========================================

// Appeler init au chargement de la page
init();
