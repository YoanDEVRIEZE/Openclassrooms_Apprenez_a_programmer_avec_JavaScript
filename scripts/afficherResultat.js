function afficherResultat (score, listeChoisie) {    
    let message = "Votre score est de : "+score + "/" + listeChoisie;
    document.getElementById("scoreText").textContent = message;
}