window.addEventListener("DOMContentLoaded", (event) => {

    let btnEnvoi;
    let loader = document.querySelector("#loader")
    let upload = document.querySelector("#upload").addEventListener('change', afficherImage);
    let image = document.querySelector("#visu");
    let label = document.querySelector("#label");
    let instruction = document.querySelector("#left p:nth-of-type(2)")

    window.setInterval(() => {
        loader.style.transform = "translateY(-100vh)"
    }, 1000);

    function afficherImage(event) {
        let file = this.files[0];
        if (file) {
            let afficheur = new FileReader();
            label.style.visibility = "hidden";
            afficheur.addEventListener("load", function() {
                console.log(this);
                image.setAttribute("src", this.result);
            });
            afficheur.readAsDataURL(file);
            instruction.innerHTML = "Ensuite, entrez votre Titre et votre artiste"
        }
    }





})