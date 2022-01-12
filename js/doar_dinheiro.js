
function pegar_id(clicked_id){
    /*alert(clicked_id)*/

    /* Get the text field */
    var copyText = clicked_id

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    /*("Copied the text: " + copyText);*/

    console.log("Copied the text: " + copyText);


}


