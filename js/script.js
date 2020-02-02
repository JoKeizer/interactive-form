
/*
    Focus first input field on page reload
 */
document.getElementById("name").focus();


/*
    Check if other selection is selected and show text input field
 */
let otherField = document.getElementById('other-title');
otherField.style.display = "none";

let titleList = document.getElementById("title");
let title = document.getElementById('title').options;

function checkLabel(label) {
    if(label){
        let selectOption = document.getElementById("title").value;
        if(selectOption === 'other'){
            otherField.style.display  = "block";
        }
        else{
            otherField.style.display = "none";
        }
    }
}





// Hide the “Select Theme” `option` element in the “Design” menu.
// ● Update the “Color” field to read “Please select a T-shirt theme”.
// ● Hide the colors in the “Color” drop down menu.
// ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
//     you’re unsure of how to accomplish these steps.

