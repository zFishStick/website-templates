var social_networks = ["social-1", "social-2", "social-3", "social-4", "social-5", "social-6", "social-7", "social-8"]

function createSocialNetworks() {
    var main_col = document.getElementById('col1')

    for (let index = 0; index < 8; index++) {

        var row = document.createElement('div')
        row.classList.add("py-3", "ms-3", "row")

        var square = document.createElement('div')
        square.classList.add("square", "col-lg-2")
        square.id = 'icon'

        var social_name = document.createElement('div')
        social_name.classList.add("social-name", "col-lg-2")
        social_name.textContent = social_networks[index]

        row.appendChild(square)
        row.appendChild(social_name)

        main_col.appendChild(row)

        if(index == 3){
            main_col = document.getElementById('col2')
        }

    }





}

createSocialNetworks()