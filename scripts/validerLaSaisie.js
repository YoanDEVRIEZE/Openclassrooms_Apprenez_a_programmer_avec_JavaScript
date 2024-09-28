function validerLaSaisie() {
    let saisie = document.getElementById("saisie").value;

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
}