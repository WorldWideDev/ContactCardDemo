$(document).ready(function(){

})
$("#theForm").submit(function(e){
    e.preventDefault();
    buildACard(e.target.children)
})
function buildACard(data){

    // build the card div
    var card = document.createElement("div");
    $(card).addClass("contact-card");

    // build the name
    var name = document.createElement("h1");
    $(name).text(data.firstName.value + " " + data.lastName.value)

    // build the desc
    var desc = document.createElement("p")
    $(desc).text(data.desc.value)

    // append content to card
    card.appendChild(name).appendChild(desc);

    //access container and append our card to it
    var cont = document.getElementById("container");
    cont.appendChild(card)
}
