// Accessing the DOM of the html by formname and element name
const fName = document.registration.firstName;
const lName = document.registration.lastName;
const age = document.registration.age;
const pNumber = document.registration.phone;

// First Name

//Error Display picked from Id of errors in form
const fNameError = document.getElementById('fName');


//Event Listeners got from constants declared
fName.addEventListener('blur', fNameVerify, true);

// Validations for empty fields
function Validate() {
    //fName validation(checking empty)
    if (fName.value == '') {
        fName.style.border = '1px solid red';
        fNameError.textContent = 'First Name is required';
        fName.focus();
        return false;
    } else {
        fName.style.border = '1px solid green';
    }
}

// Regex
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names alpha characters lname & first & last btn (5-50)


// Event Handlers for correct data
// First Name
function fNameVerify() {
    if (fName.value.match(nameRegex)) {
        fName.style.border = '1px solid green';
        fNameError.innerHTML = '';
        return true;
    } else {
        fName.style.border = '1px solid red';
        fNameError.textContent = 'First Name should be between 5-50 characters';
        fName.focus();
        return false;
    }
}

// Last Name
//Error Display picked from Id of errors in form
const lNameError = document.getElementById('lName');

//Event Listeners got from constants declared
lName.addEventListener('blur', lNameVerify, true);

// Validations for empty fields
function Validate() {
    //lName validation(checking empty)
    if (lName.value == '') {
        lName.style.border = '1px solid red';
        lNameError.textContent = 'Last Name is required';
        lName.focus();
        return false;
    } else {
        lName.style.border = '1px solid green';
    }
}
// Regex
// const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names alpha characters lname & first & last btn (5-50)

// Event Handlers for correct data
// Last Name
function lNameVerify() {
    if (lName.value.match(nameRegex)) {
        lName.style.border = '1px solid green';
        lNameError.innerHTML = '';
        return true;
    } else {
        lName.style.border = '1px solid red';
        lNameError.textContent = 'Last Name should be between 5-50 characters';
        lName.focus();
        return false;
    }
}

// Age
//Error Display picked from Id of errors in form
const ageError = document.getElementById('age');

//Event Listeners got from constants declared
age.addEventListener('blur', ageVerify, true);

// Validations for empty fields
function Validate() {
    //age validation(checking empty)
    if (age.value == '') {
        age.style.border = '1px solid red';
        ageError.textContent = 'Age is required';
        age.focus();
        return false;
    } else {
        age.style.border = '1px solid green';
    }
}
// Regex
//  const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names alpha characters lname & first & last btn (5-50)

// Event Handlers for correct data
// Age
function ageVerify() {
    if (age.value.match(nameRegex)) {
        age.style.border = '1px solid green';
        ageError.innerHTML = '';
        return true;
    } else {
        age.style.border = '1px solid red';
        ageError.textContent = 'Age should be between 5-50 characters';
        age.focus();
        return false;
    }
}

// Phone Number
//Error Display picked from Id of errors in form
const pNumberError = document.getElementById('pNumber');

//Event Listeners got from constants declared
pNumber.addEventListener('blur', pNumberVerify, true);

// Validations for empty fields
function Validate() {
    //Pnumber validation(checking empty)
    if (pNumber.value == '') {
        pNumber.style.border = '1px solid red';
        pNumberError.textContent = 'Phone Number is required';
        pNumber.focus();
        return false;
    } else {=
        pNumber.style.border = '1px solid green';
    }
}

// Regex
//  const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names alpha characters lname & first & last btn (5-50)

// Event Handlers for correct data
// Phone Number
function pNumberVerify() {
    if (pNumber.value.match(nameRegex)) {
        pNumber.style.border = '1px solid green';
        pNumberError.innerHTML = '';
        return true;
    } else {
        pNumber.style.border = '1px solid red';
        pNumberError.textContent = 'Phone Number should be between 5-50 characters';
        pNumber.focus();
        return false;
    }
}






