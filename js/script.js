
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


/*
    Payment Info show one payment on selection
 */

const payment = document.querySelector('#payment');
const creditCardElement = document.querySelector('#credit-card');
const payPalElement = document.querySelector('#paypal');
const bitcoinElement = document.querySelector('#bitcoin');

//show Select payment method so it doesn’t show up in the drop down
const selectPayment = document.querySelector('option[value="select method"]');
const selectCreditCard = document.querySelector('option[value="credit card"]');
selectPayment.style.display = "none";
selectCreditCard.selected = true;
payPalElement.style.display = "none";
bitcoinElement.style.display = "none";

payment.addEventListener('change', (e) => {
    const clicked = e.target.value;
    if(clicked === 'credit card') {
        creditCardElement.style.display = '';
        payPalElement.style.display = "none";
        bitcoinElement.style.display = "none";
    } else if (clicked === 'paypal'){
        creditCardElement.style.display = "none";
        payPalElement.style.display = "";
        bitcoinElement.style.display = "none";
    } else if(clicked === 'bitcoin') {
        creditCardElement.style.display = "none";
        payPalElement.style.display = "none";
        bitcoinElement.style.display =  ""
    }
});


/*
    Form Validation with validation expressions
 */

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const creditCardNumberInput = document.querySelector('#cc-num');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');
const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
const creditCardNumberRegex = /^\d{13,16}$/;
const zipRegex = /^\d{5}$/;
const cvvRegex = /^\d{3}$/;


// Can only contain letters a-z in lowercase
function isValidUsername(username) {
    return /^[a-z]+$/.test(username);
}

// check if the eMail is valid
const isValidEmail = (input) => {
    return emailRegex.test(input);
};


// check if the credit card section is valid
const isCreditCardValid = (input) => {

    if (selectCreditCard.selected === true) {
        document.querySelector('#error-creditcard').textContent = "13-16 Numbers only";
        return creditCardNumberRegex.test(input);
    }
};

const isZipValid = (input) => {
    if (selectCreditCard.selected === true) {
        return zipRegex.test(input);
    }
};

const isCvvValid = (input) => {
    if (selectCreditCard.selected === true) {
        return cvvRegex.test(input);
    }
};


// check if any checkbox is selected
const checkboxSelected = () => {
    console.log('running')
    let counter = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            counter = +1;
        }
    }
    if (counter === 0) {
        return false;
    } else {
        return true;
    }
};

//addEventListener on Submit button click
document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    if (isValidUsername(nameInput.value) === false) {
        event.preventDefault();
        showOrHideErrorMessage(true, nameInput.previousElementSibling);
    }
    if (isValidEmail(emailInput.value) === false) {
        event.preventDefault();
        showOrHideErrorMessage(true, emailInput.previousElementSibling);
    }
    if(checkboxSelected() === false) {
        console.log("running")
        event.preventDefault();
        showOrHideErrorMessage(true, document.querySelector('#error-checkbox'));
    }
    if (selectCreditCard.selected === true &&creditCardNumberInput.value === '' || isCreditCardValid(creditCardNumberInput.value) === false) {
        event.preventDefault();
        document.querySelector('#error-creditcard').textContent = "Cant't be blank, it should have 13-16 Numbers";
        showOrHideErrorMessage(true, creditCardNumberInput.previousElementSibling);

    }
    if (selectCreditCard.selected === true &&isZipValid(zipInput.value) === false) {
        event.preventDefault();
        showOrHideErrorMessage(true, zipInput.previousElementSibling);
    }
    if (selectCreditCard.selected === true && isCvvValid(cvvInput.value) === false) {
        event.preventDefault();
        showOrHideErrorMessage(true, cvvInput.previousElementSibling);
    }
});

// show element when show is true, hide when false
const showOrHideErrorMessage = (show, element) => {
    if (show) {
        element.style.display = '';
    } else {
        element.style.display = 'none';
    }
};


//errorMessage function create the error message on the parent div
function errorMessage (message, parent, addDivTo, IdName) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('ID', IdName);
    newDiv.className = 'error';
    newDiv.textContent = message;
    parent.insertBefore(newDiv, addDivTo);
    newDiv.style.display = 'none';
};



// errorMessages that has 4 arguments: message:string, parent selector, class selector and idName
errorMessage("What is your name?", document.querySelector('fieldset'), nameInput, 'error-name');
errorMessage('Oh no? It\'s not a valid Email', document.querySelector('fieldset'), emailInput, 'error-email');
errorMessage('What would you do for activity?', checkboxesList, document.querySelector('fieldset[class="activities"] label'), 'error-checkbox');
errorMessage('Numbers only min 13 max 16 ', document.querySelector('div[class="col-6 col"] '), creditCardNumberInput, 'error-creditcard');
errorMessage('Numbers only 5 ', document.querySelectorAll('div[class="col-3 col"] ')[0], zipInput, 'error-zip');
errorMessage('Numbers only 3', document.querySelectorAll('div[class="col-3 col"] ')[1], cvvInput, 'error-cvv');

//function to create a Event listener and calls the validation function(s)
function createListener(validator)  {
    console.log(validator);
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const message = e.target.previousElementSibling;
        showOrHideErrorMessage(showTip, message);
    };
};

//addEventListener for error messages
nameInput.addEventListener("input", createListener(isValidUsername));
emailInput.addEventListener("input", createListener(isValidEmail));
creditCardNumberInput.addEventListener("input", createListener(isCreditCardValid));
zipInput.addEventListener("input", createListener(isZipValid));
cvvInput.addEventListener("input", createListener(isCvvValid));