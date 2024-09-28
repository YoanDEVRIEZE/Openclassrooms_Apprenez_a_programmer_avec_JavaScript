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
        }
    });
}