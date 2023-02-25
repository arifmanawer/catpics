
document.addEventListener("DOMContentLoaded", () => {
    getcatimage()
    buttonclicked()
})
function getcatimage () {
    let image = document.getElementById("cat-img")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}

function buttonclicked() {
    let button = document.getElementById("generate")
    button.addEventListener("click", getcatimage)

}