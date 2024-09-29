/*
* @Function : partagerScore - gestion du partage du score 
* @Param : null
* @Return : mailto
*/
function partagerScore() {
    // On récupère le formulaire. 
    const form = document.querySelector("form");

    // On attend que l'événement submit soit exécuté. 
    form.addEventListener("submit", (event) => {
        // On empêche le rafraîchissement de la page. 
        event.preventDefault();
        
        // On récupère le nom et l'email saisis dans le formulaire. 
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;

        // On définit le sujet du mail. 
        let sujet = "Partage du score AzerType";

        // On définit le body du mail. 
        let body = "Bonjour,%0D%0A%0D%0A";
        body += "J'ai fait le score de : " + score + "/" + listeChoisie.length + "%0D%0A";
        body += "Venez relever le défi sur azertype.fr.%0D%0A%0D%0A";
        body += "Cordialement,%0D%0A";
        body += nom + ".";

        // On affiche le mail. 
        afficherEmail(email, sujet, body);

        // On ferme le pop-up
        closeForm();
    });
}