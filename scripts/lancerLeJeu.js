function lancerLeJeu() {
    let listeInputRadio = document.querySelectorAll("#main .option input");

    document.getElementById("score").style.display = "none";
    document.getElementById("motPhrase").style.display = "table-cell";
    document.getElementById("saisie").style.display = "block";
    document.getElementById("bouton").style.display = "block";

    if (document.getElementById("boutonPart") && document.getElementById("boutonRejouer")) {
        let boutonPart = document.getElementById("boutonPart");
        let boutonRejouer = document.getElementById("boutonRejouer");

        boutonPart.remove();
        boutonRejouer.remove();
    }

    listeInputRadio.forEach(input => {
        if (input.checked) {
            listeChoisie = (input.value === "1") ? listeMots : listePhrases;
            score = 0;
            currentIndex = 0;
            document.getElementById("PhrasesMots").textContent = listeChoisie[currentIndex];
            document.getElementById("saisie").focus();
        }
    });
}

function validerLaSaisie() {
    let saisie = document.getElementById("saisie").value;
    
    if (saisie != "") {
        document.getElementById("erreur").textContent = "";
        if (saisie == listeChoisie[currentIndex]) {
            score++;
        }

        document.getElementById("saisie").value = "";
        currentIndex++;

        if (currentIndex < listeChoisie.length) {
            document.getElementById("PhrasesMots").textContent = listeChoisie[currentIndex];
        } else {
            document.getElementById("PhrasesMots").textContent = "Fin du jeu !";
            afficherResultat(score, listeChoisie.length);
        }
    } else {
        document.getElementById("erreur").textContent = "Veuillez saisir du texte !";
    }

    document.getElementById("saisie").focus();
}

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