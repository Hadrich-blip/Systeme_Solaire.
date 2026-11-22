// Vérifier le formulaire
function verifierFormulaire() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let pays = document.getElementById("pays").value;
    let choix = document.getElementsByName("destination");
    let erreur = document.getElementById("erreur-form");
    let succes = document.getElementById("succes-form");
    let trouve = false;

    erreur.innerHTML = "";
    succes.innerHTML = "";

    if (nom == "" || email == "" || pays == "") {
        erreur.innerHTML = "Remplissez les champs obligatoires.";
        return false;
    }

    for (let i = 0; i < choix.length; i++) {
        if (choix[i].checked == true) {
            trouve = true;
        }
    }

    if (trouve == false) {
        erreur.innerHTML = "Choisissez une destination.";
        return false;
    }

    succes.innerHTML = "Votre formulaire est bien rempli.";
    return false;
}

function afficherNiveau() {
    let niveau = document.getElementById("niveau").value;
    let resultat = document.getElementById("niveau-valeur");

    resultat.innerHTML = niveau + " / 10";
}

function lancerVideo() {
    let video = document.getElementById("space-video").play();
}

function arreterVideo() {
    let video = document.getElementById("space-video").pause();
}