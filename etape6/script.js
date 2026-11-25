// ETAPE 6 : SUPPRESSION DES LIGNES SELECTIONNEES

// Slide 45 : fonction JavaScript
function deleteRow() {

    // Slide 42 : condition if
    if (lignes === 0) {

        // Slide 116 : fenêtre d'alerte
        alert("Le tableau est vide !");
        return;
    }

    // Slide 61 : récupération d'un élément HTML
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

    // Slide 42 : condition if
    if (selection === false) {

        // Slide 116 : alert()
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Slide 116 : boîte de confirmation
    if (
        !confirm(
            "Voulez-vous vraiment supprimer les lignes sélectionnées ?"
        )
    ) {
        return;
    }

    // Slide 76 : récupération de plusieurs éléments
    const rows = tbody.querySelectorAll("tr");

    // Slide 44 : boucle for
    for (let i = rows.length - 1; i >= 0; i--) {

        const checkbox = rows[i].querySelector(
            "input[type='checkbox']"
        );

        if (checkbox.checked) {

            // Slide 91 : lecture du contenu texte
            const points =
                parseInt(
                    rows[i].cells[3].innerText
                );

            total_points -= points;

            lignes--;

            // Slide 39 : suppression dans un tableau
            persons.splice(i, 1);

            // Slide 100 : suppression d'un élément du DOM
            rows[i].remove();
        }
    }

    update_summary();

    // Slide 116 : message de succès
    alert("Suppression effectuée avec succès !");
}