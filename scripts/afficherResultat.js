function openForm() {
    document.getElementById("popup-Form").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-Form").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none"; 
}

function afficherResultat (score, listeChoisie) {    
    if (!document.getElementById("boutonPart") && !document.getElementById("boutonRejouer")) {
        document.getElementById("saisie").style.display = "none";
        document.getElementById("bouton").style.display = "none";
        document.getElementById("score").style.display = "table-cell";
        let message = "Votre score est de : "+score + "/" + listeChoisie;
        document.getElementById("scoreText").textContent = message;
        let partage = document.getElementById("score");
        let div = document.createElement("div");
        div.classList.add("partager");
        let bouton = document.createElement("button");
        bouton.id = ("boutonPart");
        bouton.onclick = openForm;
        bouton.textContent = "Partager le score";
        let boutonRejouer = document.createElement("button");
        boutonRejouer.id = ("boutonRejouer");
        boutonRejouer.onclick = lancerLeJeu;
        boutonRejouer.textContent = "Rejouer !";
        div.appendChild(bouton);
        div.appendChild(boutonRejouer);
        partage.appendChild(div);
    }
}
