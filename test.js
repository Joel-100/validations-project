//Picked from the name of input
const fname = document.farmerOne.firstName;
const lname = document.farmerOne.lastName;
const Username = document.farmerOne.username;
const pass = document.farmerOne.password;
const passConfirm = document.farmerOne.confirmPassword;
const gender = document.farmerOne.gender;
const dateBirth = document.farmerOne.dateOfBirth;
const nin = document.farmerOne.nin;
const phone = document.farmerOne.phone;
const address = document.farmerOne.address;
const resident = document.farmerOne.residenceType;
const UrbanWard = document.farmerOne.ward;
const foNo = document.farmerOne.fOnumber;
const activ = document.farmerOne.activities;
const dateReg = document.farmerOne.dateOfReg;
const StayPeriod = document.farmerOne.periodOfStay;

//Error Display picked from Id of errors in form
const fName_error = document.getElementById('fName');
const lName_error = document.getElementById('lName');
const Name_error = document.getElementById('Name');
const Pwd_error = document.getElementById('Pwd');
const PwdConf_error = document.getElementById('pwdConf');
const gder_error = document.getElementById('gend');
const Dob_error = document.getElementById('dtb');
const niN_error = document.getElementById('ni');
const phne_error = document.getElementById('phon');
const addres_error = document.getElementById('addr');
const resident_error = document.getElementById('rad');
const wad_error = document.getElementById('wad');
const fo_ID = document.getElementById('fone');
const fAct_error = document.getElementById('act');
const period_error = document.getElementById('ptay');
const dor_error = document.getElementById('dReg');

//Event Listners got from consts
fname.addEventListener('blur', fName_Verify, true);
lname.addEventListener('blur', lName_Verify, true);
Username.addEventListener('blur', Name_Verify, true);
pass.addEventListener('blur', Pwd_Verify, true);
passConfirm.addEventListener('blur', PwdConf_Verify, true);
gender.addEventListener('blur', gder_Verify, true);
dateBirth.addEventListener('blur', Dob_Verify, true);
nin.addEventListener('blur', niN_Verify, true);
phone.addEventListener('blur', phne_Verify, true);
address.addEventListener('blur', addres_Verify, true);
// resident.addEventListener('blur', resid_Verify, true);
UrbanWard.addEventListener('blur', wad_Verify, true);
foNo.addEventListener('blur', fo_Verify, true);
// activ.addEventListener('blur', fAct_Verify, true);
StayPeriod.addEventListener('blur', Stay_Verify, true);
dateReg.addEventListener('blur', dor_Verify, true);

//validations
function Validate() {
  //fName validation(checking empty)
  if (fname.value == '') {
    fname.style.border = '1px solid red';
    fName_error.textContent = 'First Name is required';
    fname.focus();
    return false;
  }
  //lName validation
  if (lname.value == '') {
    lname.style.border = '1px solid red';
    lName_error.textContent = 'Last Name is required';
    lname.focus();
    return false;
  }

  //userName validation
  if (Username.value == '') {
    Username.style.border = '1px solid red';
    Name_error.textContent = 'Username is required';
    Username.focus();
    return false;
  }

  // password validation
  if (pass.value == '') {
    pass.style.border = '1px solid red';
    Pwd_error.textContent = 'Password is required';
    pass.focus();
    return false;
  }

  // password match
  if (pass.value != passConfirm.value) {
    pass.style.border = '1px solid red';
    passConfirm.style.border = '1px solid red';
    PwdConf_error.innerHTML = 'Password not the same';
    passConfirm.focus();
    return false;
  }

  //Gender
  if (gender.value === 'default') {
    gender.style.border = '1px solid red';
    gder_error.textContent = 'Select gender';
    gender.focus();
    return false;
  }

  // Date of birth
  if (dateBirth.value == '') {
    dateBirth.style.border = '1px solid red';
    Dob_error.textContent = 'Date of birth is required';
    dateBirth.focus();
    return false;
  }

  // Nin number
  if (nin.value == '') {
    nin.style.border = '1px solid red';
    niN_error.textContent = 'NIN is required';
    nin.focus();
    return false;
  }

  // Phone number
  if (phone.value == '') {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone is required';
    phone.focus();
    return false;
  }

  // Address
  if (address.value == '') {
    address.style.border = '1px solid red';
    addres_error.textContent = 'Address is required';
    address.focus();
    return false;
  }

  if (resident[0].checked == false && resident[1].checked == false) {
    resident_error.textContent = 'Select type of residence';
    return false;
  } else {
    resident_error.innerHTML = '';
  }

  // Ward
  if (UrbanWard.value == 'selectWard') {
    UrbanWard.style.border = '1px solid red';
    wad_error.textContent = 'Select Ward';
    UrbanWard.focus();
    return false;
  }

  // FO ID
  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    fo_ID.textContent = 'FO number is required';
    foNo.focus();
    return false;
  }

  //Activities validation
  if (
    activ[0].checked == false &&
    activ[1].checked == false &&
    activ[2].checked == false &&
    activ[3].checked == false
  ) {
    fAct_error.textContent = 'Select atleast one activity';
    return false;
  } else {
    fAct_error.innerHTML = '';
  
  }

  // Period of stay
  if (StayPeriod.value == '') {
    StayPeriod.style.border = '1px solid red';
    period_error.textContent = 'Select Period of stay';
    StayPeriod.focus();
    return false;
  }

  // Date of registration
  if (dateReg.value == '') {
    dateReg.style.border = '1px solid red';
    dor_error.textContent = 'Date of Registration required';
    dateReg.focus();
    return false;
  }
}

// Regexes
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const foRegex = /FO-[1-9]{1,}\d?/; //for FO number

// Event Handlers
// First name
function fName_Verify() {
  if (fname.value != '' && fname.value.match(nameRegex)) {
    fname.style.border = '1px solid #98FB98';
    fName_error.innerHTML = '';
    return true;
  } else {
    fname.style.border = '1px solid red';
    fName_error.textContent = 'First Name must be between 5 to 50 characters';
    fname.focus();
    return false;
  }
}

// last name
function lName_Verify() {
  if (lname.value != '' && lname.value.match(nameRegex)) {
    lname.style.border = '1px solid #98FB98';
    lName_error.innerHTML = '';
    return true;
  } else {
    lname.style.border = '1px solid red';
    lName_error.textContent = 'Last Name must be between 5 to 50 characters';
    lname.focus();
    return false;
  }
}

// Username
function Name_Verify() {
  if (Username.value != '' && Username.value.match(alphaNumeric)) {
    Username.style.border = '1px solid #98FB98';
    Name_error.innerHTML = '';
    return true;
  } else {
    Username.style.border = '1px solid red';
    Name_error.textContent = 'User Name must be alpha Numeric characters';
    Username.focus();
    return false;
  }
}

// Password
function Pwd_Verify() {
  if (pass.value != '') {
    pass.style.border = '1px solid #98FB98';
    Pwd_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

function PwdConf_Verify() {
  if (passConfirm.value != '') {
    passConfirm.style.border = '1px solid #98FB98';
    PwdConf_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

// Gender
function gder_Verify() {
  if (gender.value != '') {
    gender.style.border = '1px solid #98FB98';
    gder_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

// Date of birth
function Dob_Verify() {
  if (dateBirth.value != '') {
    dateBirth.style.border = '1px solid #98FB98';
    Dob_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

// Nin
function niN_Verify() {
  if (nin.value != '' && nin.value.match(ninRegex)) {
    nin.style.border = '1px solid #98FB98';
    niN_error.innerHTML = '';
    return true;
  } else {
    nin.style.border = '1px solid red';
    niN_error.textContent = 'Nin must be 13 alpha Numeric characters';
    nin.focus();
    return false;
  }
}

// Phone number
function phne_Verify() {
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

// Adress
function addres_Verify() {
  if (address.value != '') {
    address.style.border = '1px solid #98FB98';
    addres_error.innerHTML = '';
    return true;
  }
}

// Residence 
function resid_Verify() {
  if (resident.value != '') {
    resident_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

// Ward
function wad_Verify() {
  if (UrbanWard.value != '') {
    UrbanWard.style.border = '1px solid #98FB98';
    wad_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}

// FO Number
function fo_Verify() {
  if (foNo.value != '' && foNo.value.match(foRegex)) {
    foNo.style.border = '1px solid #98FB98';
    fo_ID.innerHTML = '';
    return true;
  } else {
    foNo.style.border = '1px solid red';
    fo_ID.textContent = 'FO number should have required format';
    foNo.focus();
    return false;
  }
}

// Period of Stay
function Stay_Verify() {
  if (StayPeriod.value != '' && StayPeriod.value > 10) {
    StayPeriod.style.border = '1px solid #98FB98';
    period_error.innerHTML = '';
    return true;
  } else {
    StayPeriod.style.border = '1px solid red';
    period_error.textContent = 'Period of stay must be greater than 10 years';
    StayPeriod.focus();
    return false;
  }
}

// Date of registration
function dor_Verify() {
  if (dateReg.value != '') {
    dateReg.style.border = '1px solid #98FB98';
    dor_error.innerHTML = '';
    return true;
  } else {
    return false;
  }
}