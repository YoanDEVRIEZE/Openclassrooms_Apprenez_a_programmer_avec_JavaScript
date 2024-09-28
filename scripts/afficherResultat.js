function openForm() {
    document.getElementById("popup-Form").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-Form").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none"; 
}

function afficherResultat (score, listeChoisie) {    
    if (!document.getElementById("boutonPart")) {
        let message = "Votre score est de : "+score + "/" + listeChoisie;
        document.getElementById("scoreText").textContent = message;
        let partage = document.getElementById("score");
        let div = document.createElement("div");
        div.classList.add("partager");
        let bouton = document.createElement("button");
        bouton.id = ("boutonPart");
        bouton.onclick = openForm;
        bouton.textContent = "Partager le score";
        div.appendChild(bouton);
        partage.appendChild(div);
    }
}
