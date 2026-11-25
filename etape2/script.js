"use strict"; // Slide 51 : mode strict

// Slide 45 : définition d'une fonction
function doInsertRowTable(num, nom, prenom, points){

    // Slide 61 : récupération d'un élément HTML par identifiant
    const tbody = document.getElementById("table_body");

    // Slide 104 : création dynamique d'une ligne HTML
    const tr = document.createElement("tr");

    // Création de la cellule numéro
    const td_num = document.createElement("td");

    // Slide 106 : modification d'un attribut HTML
    td_num.setAttribute("class","col_number");

    // Slide 91 : modification du contenu texte
    td_num.innerText = num;

    // Création de la cellule nom
    const td_nom = document.createElement("td");
    td_nom.setAttribute("class","col_text");
    td_nom.innerText = nom;

    // Création de la cellule prénom
    const td_prenom = document.createElement("td");
    td_prenom.setAttribute("class","col_text");
    td_prenom.innerText = prenom;

    // Création de la cellule points
    const td_points = document.createElement("td");
    td_points.setAttribute("class","col_text");
    td_points.innerText = points;

    // Création de la cellule contenant la case à cocher
    const td_select = document.createElement("td");
    td_select.setAttribute("class","col_chkbox");

    // Slide 104 : création dynamique d'un élément input
    const checkbox = document.createElement("input");

    // Slide 106 : ajout/modification d'un attribut
    checkbox.setAttribute("type", "checkbox");

    // Slide 99 : ajout d'un élément enfant
    td_select.appendChild(checkbox);

    // Slide 99 : ajout des cellules à la ligne
    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prenom);
    tr.appendChild(td_points);
    tr.appendChild(td_select);

    // Slide 103-104 : insertion d'un nouvel élément dans le DOM
    tbody.appendChild(tr);
}