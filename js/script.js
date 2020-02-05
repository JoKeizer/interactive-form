
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

const checkboxes = document.querySelectorAll('.activities input');
const checkboxesList = document.querySelector('.activities');

/*
    Register for Activities checkboxes
 */

// create div for total cost
let totalCost = 0;
const costDiv =  document.createElement('div');
costDiv.className = 'total';
costDiv.textContent = 'Total $ ' + totalCost;

checkboxesList.appendChild(costDiv);

const costEvent = document.querySelector('.total');

checkboxesList.addEventListener('change', (e) => {
    const clicked = e.target;
    const clickedTypeDate = clicked.getAttribute('data-day-and-time');
    const clickedTypeCost = clicked.getAttribute('data-cost');

    if(clicked.checked) {
        totalCost = totalCost + parseInt(clickedTypeCost, 10);
        costEvent.textContent = 'Total $ ' + totalCost;
        // document.querySelector('#error-checkbox').style.display='block';
    } else if(clicked.checked !== true) {
        totalCost = totalCost - parseInt(clickedTypeCost, 10);
        costEvent.textContent = 'Total $ ' + totalCost;
    }

    //loop over all checkbox input fields
    for (let i = 0; i < checkboxes.length; i++) {
        //get the date and time on click event
        const checkboxType = checkboxes[i].getAttribute('data-day-and-time');

        //if the date and time are equal the event is disabled
        if (clickedTypeDate === checkboxType && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }

});


//checkbox activities
document.querySelector('.activities').addEventListener('change', (e) => {
    // for (let i = 0; i < checkboxes.length; i++) {
    //     const clicked = e.target;
    //     const clickedTypeDate = clicked.getAttribute('data-day-and-time');
    //     const clickedTypeCost = clicked.getAttribute('data-cost');
    //
    //     if(clicked.checked) {
    //         totalCost = totalCost + parseInt(clickedTypeCost, 10);
    //         costEvent.textContent = 'Total $ ' + totalCost;
    //         console.log('totalCost',totalCost);
    //         // document.querySelector('#error-checkbox').style.display='block';
    //     } else if(clicked.checked !== true) {
    //         console.log("running")
    //         totalCost = totalCost - parseInt(clickedTypeCost, 10);
    //         costEvent.textContent = 'Total $ ' + totalCost;
    //     }
    //
    //     //get the date and time on click event
    //     const checkboxType = checkboxes[i].getAttribute('data-day-and-time');
    //
    //     //if the date and time are equal the event is disabled
    //     if (clickedTypeDate === checkboxType && clicked !== checkboxes[i]) {
    //         if (clicked.checked) {
    //             checkboxes[i].disabled = true;
    //         } else {
    //             checkboxes[i].disabled = false;
    //         }
    //     }
    // }
});

