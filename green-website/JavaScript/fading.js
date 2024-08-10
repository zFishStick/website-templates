function fadeOutIn(id) {

    if(id == "tohome-button"){
        var pageUrl = "index.html";
    }
    else{
        pageUrl = "page-1.html";
    }
    
    $("#index").fadeOut(500, function() {
        // Aggiorna l'URL senza ricaricare la pagina
        history.pushState(null, null, pageUrl);

        // Carica il contenuto della nuova pagina
        $("#index").load(pageUrl, function() {
            $("#index").fadeIn(500);
        });
    });

    // Gestisci il caso in cui l'utente ricarica la pagina o naviga indietro/avanti
    $(window).on('popstate', function () {
        location.reload(); // Ricarica la pagina attuale se l'utente usa il pulsante indietro
    });
}

// I bottoni chiameranno questa funzione quando vengono cliccati
