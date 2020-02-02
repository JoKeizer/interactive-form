
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

/*
    On design selection show available colors
 */
const design = document.querySelector('#design');
const color = document.getElementById('color');

// Hide the colors

for (let i = 0; i < color.children.length; i++) {
    color.children[i].style.display = 'none';
}

design.addEventListener('change', (e) => {
    if (e.target.value === 'js puns') {
        color.selectedIndex = 1;
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index <=3) {
                color.children[0].style.display = 'none'; //first item Please Select a Theme
                color.children[i].style.display = 'none';

            } else {
                color.children[i].style.display = 'block';
            }
        }

    } else if (e.target.value === 'heart js') {
        color.selectedIndex = 4;
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index >= 4) {
                color.children[0].style.display = 'none';  //first item Please Select a Theme
                color.children[i].style.display = 'none';
            } else {
                color.children[i].style.display = 'block';
            }
        }
    }
    else {
        for (let i = 0; i < color.children.length; i++) {
                color.children[i].style.display = 'block';
        }
    }
});

