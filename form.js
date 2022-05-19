// Acessing the DOM by formname and element name
const fname = document.registration.firstName;
const lname = document.registration.lastName;
const email = document.registration.email;
const phone = document.registration.phone;
const pass = document.registration.password;
const passConfirm = document.registration.confirmPassword;

//Error Display picked from Id of errors in form
const fname_error = document.getElementById('fName');
const lname_error = document.getElementById('lName');
const email_error = document.getElementById('email')
const phne_error = document.getElementById('phone');
const pwd_error = document.getElementById('pwd');
const cpwd_error = document.getElementById('cPwd');

//Event Listners got from consts
fname.addEventListener('blur', fName_Verify, true);
lname.addEventListener('blur', lName_Verify, true);
email.addEventListener('blur', email_Verify, true);
phone.addEventListener('blur', phone_Verify, true);
pass.addEventListener('blur', pwd_Verify, true);
passConfirm.addEventListener('blur', cPwd_Verify, true);



function Validate() {
  //fName validation(checking empty)
  if (fname.value == '') {
    fname.style.border = '1px solid red';
    fname_error.textContent = 'First Name is required';
    fname.focus();
    return false;
  }
  //lName validation
  if (lname.value == '') {
    lname.style.border = '1px solid red';
    lname_error.textContent = 'Last Name is required';
    lname.focus();
    return false;
  }

  //Email validation
  if (email.value == '') {
    email.style.border = '1px solid red';
    email_error.textContent = 'email is required';
    email.focus();
    return false;
  }

  // Phone number
  if (phone.value == '') {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone is required';
    phone.focus();
    return false;
  }

  // password validation
  if (pass.value == '') {
    pass.style.border = '1px solid red';
    pwd_error.textContent = 'Password is required';
    pass.focus();
    return false;
  }

  // password match
  if (pass.value != passConfirm.value) {
    pass.style.border = '1px solid red';
    passConfirm.style.border = '1px solid red';
    cpwd_error.innerHTML = 'Password not the same';
    passConfirm.focus();
    return false;
  }
}

// Regex
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const ufRegex = /UF-[1-9]{1,}\d?/; //for FO number

// Event Handlers for correct data
// First name
function fName_Verify() {
  if (fname.value != '' && fname.value.match(nameRegex)) {
    fname.style.border = '1px solid #98FB98';
    fname_error.innerHTML = '';
    return true;
  } else {
    fname.style.border = '1px solid red';
    fname_error.textContent = 'First Name must be between 5 to 50 characters';
    fname.focus();
    return false;
  }
}

// last name
function lName_Verify() {
  if (lname.value != '' && lname.value.match(nameRegex)) {
    lname.style.border = '1px solid #98FB98';
    lname_error.innerHTML = '';
    return true;
  } else {
    lname.style.border = '1px solid red';
    lname_error.textContent = 'Last Name must be between 5 to 50 characters';
    lname.focus();
    return false;
  }
}

// Email
function email_Verify() {
  if (phone.value != '' && phone.value.match(phoneRegex)) {
    phone.style.border = '1px solid #98FB98';
    phne_error.innerHTML = '';
    return true;
  } else {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone number must be 10 numbers';
    phone.focus();
    return false;
  }
}
// Phone number
function phone_Verify() {
  if (phone.value != '' && phon.value.match(phoneRegex)) {
    phone.style.border = '1px solid #98FB98';
    phne_error.innerHTML = '';
    return true;
  } else {
    phone.style.border = 'red';
    phne_error.textContent = 'Phone number must be 10 digits';
    return false;
  }
}

// Password
function pwd_Verify() {
  if (pass.value != '') {
    pass.style.border = '1px solid #98FB98';
    pwd_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

function cPwd_Verify() {
  if (passConfirm.value != '') {
    passConfirm.style.border = '1px solid #98FB98';
    PwdConf_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}
