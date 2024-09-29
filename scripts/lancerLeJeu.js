/*
* @Function : lancerLeJeu - initialise le jeu AzerType
* @Return : null
* @Param : null
*/
function lancerLeJeu() {
    // Récupération des boutons radio pour le choix de la partie. 
    let listeInputRadio = document.querySelectorAll("#main .option input");

    // On cache le score. 
    document.getElementById("score").style.display = "none";

    // On affiche les mots ou les phrases.
    document.getElementById("motPhrase").style.display = "table-cell";

    // On affiche le formulaire. 
    document.getElementById("saisie").style.display = "block";
    document.getElementById("bouton").style.display = "block";

    // Si une partie a déjà été jouée, on retire les éléments de partage et le bouton rejouer. 
    if (document.getElementById("boutonPart") && document.getElementById("boutonRejouer")) {
        // Récupération du bouton partager.
        let boutonPart = document.getElementById("boutonPart");
        // Récupération du bouton rejouer. 
        let boutonRejouer = document.getElementById("boutonRejouer");

        // Suppression des boutons. 
        boutonPart.remove();
        boutonRejouer.remove();
    }

    // On attend que l'un des boutons radio du choix de partie soit sélectionné. 
    listeInputRadio.forEach(input => {
        if (input.checked) {
            // On définit la liste selon le choix. 
            listeChoisie = (input.value === "1") ? listeMots : listePhrases;

            // On réinitialise le score. 
            score = 0;

            // On réinitialise le curseur. 
            currentIndex = 0;

            // On affiche le mot ou la phrase de la liste.
            document.getElementById("PhrasesMots").textContent = listeChoisie[currentIndex];

            // On met un focus sur l'input de saisie.
            document.getElementById("saisie").focus();
        }
    });
}