
var main_col = document.getElementById('text')

function create_box() {


    for (let index = 0; index < 3; index++) {

        var title = document.createElement('div')
        title.classList.add("title")
        title.textContent = "Test"

        var subtitle = document.createElement('div')
        subtitle.classList.add("subtitle", "mb-5")
        subtitle.textContent = "subtitle"

        main_col.append(title, subtitle) //appends more children!

    }


}

create_box()