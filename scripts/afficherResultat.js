/*
* @Function : afficherResultat - affiche la zone de résultat en fin de partie
* @Param : string score, array listeChoisie
* @Return : null
*/
function afficherResultat (score, listeChoisie) {    
    // On vérifie que le bouton partager et rejouer n'existe pas pour éviter les doublons. 
    if (!document.getElementById("boutonPart") && !document.getElementById("boutonRejouer")) {
        // On cache le formulaire.
        document.getElementById("saisie").style.display = "none";
        document.getElementById("bouton").style.display = "none";

        // On affiche la zone de score. 
        document.getElementById("score").style.display = "table-cell";

        // On définit le message du score et on l'affiche. 
        let message = "Un score de : " + score + "/" + listeChoisie;
        document.getElementById("scoreText").textContent = message;

        // On sélectionne la zone score.
        let partage = document.getElementById("score");

        // On crée une DIV, pour afficher les boutons de fin de partie. 
        let div = document.createElement("div");
        
        // On définit la classe de la DIV. 
        div.classList.add("partager");

        // On crée un bouton partager. 
        let bouton = document.createElement("button");

        // On définit l'id du bouton partager. 
        bouton.id = ("boutonPart");

        // On définit son action onclick. 
        bouton.onclick = openForm;

        // On définit la valeur du bouton partager. 
        bouton.textContent = "Partager le score";

        // On crée un bouton rejouer. 
        let boutonRejouer = document.createElement("button");

        // On définit l'id du bouton rejouer. 
        boutonRejouer.id = ("boutonRejouer");

        // On définit son action onclick. 
        boutonRejouer.onclick = lancerLeJeu;

        // On définit la valeur du bouton rejouer. 
        boutonRejouer.textContent = "Rejouer !";

        // On ajoute la DIV et les boutons à la zone score. 
        div.appendChild(bouton);
        div.appendChild(boutonRejouer);
        partage.appendChild(div);
    }
}
