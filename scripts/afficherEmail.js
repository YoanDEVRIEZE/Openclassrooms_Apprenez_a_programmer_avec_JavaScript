/*
* @Function : afficherEmail - création d'un mailto
* @Param : string nom, string sujet, string email, string score
* @Return : mailto
*/
function afficherEmail(email, sujet, body) {
    // Création du mailto
    let mailto = `mailto:${email}?subject=${sujet}&body=${body}`;

    // Ouverture du mailto
    location.href = mailto;
}