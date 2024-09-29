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

        // On vérifie si l'adresse mail et le nom soit vide et on retourne un message d'érreur. 
        if (email === "" && nom === "") {
            document.getElementById("erreurPartage").textContent = "Veuillez compléter tous les champs !";
            return;
        }

        // On vérifie si l'adresse mail n'est pas conforme et on retourne un message d'erreur. 
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("erreurPartage").textContent = "Veuillez saisir une adresse email valide !";
            return;
        }

        // On réinitialise le message d'erreur. 
        document.getElementById("erreurPartage").textContent = "";

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