"use strict";
function doInsertRowTable(num,nom,prenom,points){

    //recuperer le tbody du tableau 
    const tbody = document.getElementById("table_body");

    //creer la ligne tr
    const tr=document.createElement("tr");

    //creer la cellule Num <td>
    const td_num = document.createElement("td");
    td_num.setAttribute("class","col_number");
    td_num.innerText = num;

    //creer la cellule Nom <td>
     const td_nom = document.createElement("td");
    td_nom.setAttribute("class","col_text");
    td_nom.innerText = nom;

    //creer la cellule Prenom <td>
     const td_prenom = document.createElement("td");
    td_prenom.setAttribute("class","col_text");
    td_prenom.innerText = prenom;

    //creer la cellule Points <td>
     const td_points = document.createElement("td");
    td_points.setAttribute("class","col_text");
    td_points.innerText = points;

    //creer la cellule select <td> avec checkbox 
    const td_select = document.createElement("td");
    td_select.setAttribute("class","col_chkbox");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    td_select.appendChild(checkbox);

    //
    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prenom);
    tr.appendChild(td_points);
    tr.appendChild(td_select);
    tbody.appendChild(tr);

}