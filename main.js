
//Making function
function remove(){
    //remove items from card
    var removeCardbuttons= document.getElementsByClassName("card-remove");
    console.log(removeCardbuttons);
    for (var i=0; i<removeCardbuttons.length;i++)
    var button= removeCardbuttons[i];
    button.addEventListener("click", removeCardItems);
}
   //quantity changes
  var quantityInputs = document.getElementsByClassName('card-quantity')
for (var i=0; i<removeCardbuttons.length; i++)
var input = quantityInputs[i];
input.addEventListener('change',quantitychanged);



//remove items from card
function removeCardItems(event) {
    var buttonClicked = EventTarget;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity changed
function quantitychanged(event){
var input= event.target
if (isNaN(input.value)|| input.value<=0) {
    input.value=1
}
}
//update total
function updatetotal() {
    var cardContent=Document.getElementsByClassName('card-content') [0];
    var cardBoxes=Document.getElementsByClassName('card-box') ;
    var total=0;
    for (var i = 0; i < cardBoxes; i++) {
        var cardBoxes = cardBoxes[i];
        var priceElement= cardBoxes.getElementsByClassName("card-price") [0];
        var quantityElement=cardBoxes.getElementsByClassName("card-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""))
        var quantity=quantityElement.value;
        total = total+ (price* quantity);
        document.getElementsByClassName('total-price')[0].innerText= '$'+ total;

    }

}
