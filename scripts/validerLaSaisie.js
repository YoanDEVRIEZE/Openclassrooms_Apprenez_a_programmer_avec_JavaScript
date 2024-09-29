/*
* @Function : validerLaSaisie - vérification de la saisie du fomrulaire
* @Return : null
* @Param : null
*/
function validerLaSaisie() {
    // Récupération de la valeur de l'input.
    let saisie = document.getElementById("saisie").value;
    
    // Si la saisie est vide quitter la fonction.
    if (saisie === "") {
        // On affiche le message d'erreur. 
        document.getElementById("erreur").textContent = "Veuillez saisir du texte !";

        // On met le focus sur l'input pour la prochaine saisie. 
        document.getElementById("saisie").focus();

        // On quitte la fonction. 
        return;
    }

    // On retire l'erreur si la saisie n'est pas vide.
    document.getElementById("erreur").textContent = "";

    // On met le focus sur l'input pour la prochaine saisie. 
    document.getElementById("saisie").focus();

    // Si la réponse est bonne : +1 point. 
    if (saisie == listeChoisie[currentIndex]) {
        score++;
    }

    // On vide l'input, pour préparer la nouvelle saisie. 
    document.getElementById("saisie").value = "";

    // On déplace le curseur dans la tableau de mots ou de phrases. 
    currentIndex++;

    // Si le curseur dépasse la liste de mots ou phrase on arrête la partie. 
    if (currentIndex >= listeChoisie.length) {
        // On affiche le message de fin du jeu. 
        document.getElementById("PhrasesMots").textContent = "Fin du jeu !";

        // Affichage du score. 
        afficherResultat(score, listeChoisie.length);

        // On quitte la fonction. 
        return;
    }
    
    // On affiche le mot ou la phrase suivant(e).
    document.getElementById("PhrasesMots").textContent = listeChoisie[currentIndex];
}