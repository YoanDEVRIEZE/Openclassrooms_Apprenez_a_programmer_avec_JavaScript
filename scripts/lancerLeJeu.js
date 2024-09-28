function lancerLeJeu() {
    let listeInputRadio = document.querySelectorAll("#main .option input");

    listeInputRadio.forEach(input => {
        if (input.checked) {
            listeChoisie = (input.value === "1") ? listeMots : listePhrases;
            score = 0;
            currentIndex = 0;
            document.getElementById("PhrasesMots").textContent = listeChoisie[currentIndex];
        }
    });
}