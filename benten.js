const select = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

select.addEventListener("change", function() {

    const selectedCharacter = select.value;

    image.src = "images/" + selectedCharacter + ".jpg";

});

