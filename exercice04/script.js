function ajouterPersonneOuTable(nom, prenom, age, job) {
    for (let i = 1; i < tabPers.rows.length; i++) {
        let age_ = tabPers.rows[i].cells[2].innerHTML;
        if (age_ > age.value) {
            tabPers.rows[i].insertAdjacentHTML(
                "beforebegin",
                "<tr>" +
                    "<td>" +
                    nom.value +
                    "</td>" +
                    "<td>" +
                    prenom.value +
                    "</td>" +
                    "<td>" +
                    age.value +
                    "</td>" +
                    "<td>" +
                    job.value +
                    "</td>" +
                    "</tr>"
            );
            return;
        }
    }
    tabPers.rows[tabPers.rows.length - 1].insertAdjacentHTML(
        "afterend",
        "<tr>" +
            "<td>" +
            nom.value +
            "</td>" +
            "<td>" +
            prenom.value +
            "</td>" +
            "<td>" +
            age.value +
            "</td>" +
            "<td>" +
            job.value +
            "</td>" +
            "</tr>"
    );
}

function ajouterPersonne() {
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let age = document.getElementById("age");
    let job = document.getElementById("job");
    isEmpty(nom);
    isEmpty(prenom);
    isEmpty(age);
    isEmpty(job);
    if (!isEmpty(nom) && !isEmpty(prenom) && !isEmpty(age) && !isEmpty(job)) {
        message.hidden = true;
        ajouterPersonneOuTable(nom, prenom, age, job);
    }
}

function isEmpty(i) {
    if (!i.value) {
        i.classList.add("failed");
        message.hidden = false;
        return true;
    }
    i.classList.remove("failed");
    return false;
}
