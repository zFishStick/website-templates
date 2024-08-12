function fadeOutIn(id) {
    var pageUrl

    switch (id) {
        case "tohome-button":
            pageUrl = "index.html";
            break;
        case "page1":
            pageUrl = "page-1.html";
        case "page2":
            pageUrl = "page-2.html";
        default:
            break;
    }

    $("#index").fadeOut(500, function () {
        history.pushState(null, null, pageUrl);

        $("#index").load(pageUrl, function () {
            $("#index").fadeIn(500);
        });
    });

    $(window).on('popstate', function () {
        location.reload();
    });
}

