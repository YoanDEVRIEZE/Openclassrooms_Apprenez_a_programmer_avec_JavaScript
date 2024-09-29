/*
* @Function : openForm - Ouvre la fenetre pop-up pour le paratage du score
* @Return : null
* @Param : null
*/
function openForm() {
    // Affiche la fenêtre pop-up pour le partage de score
    document.getElementById("popup-Form").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
}

/*
* @Function : closeForm - ferme la fenetre pop-up pour le paratage du score
* @Return : null
* @Param : null
*/
function closeForm() {
    // Ferme la fenêtre pop-up pour le partage de score
    document.getElementById("popup-Form").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none"; 
}