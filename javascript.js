function myFunction() {
    var x = document.getElementById("sidebar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function verifyName(name) {
    return /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(name);
}

function verifyPhoneNumber(phoneNumber) {
    return /^\d{8,}$/.test(phoneNumber);
}
function verify() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (!verifyName(firstName) ) {
        alert('Invalid firstname. Please enter a valid firstname.');    
    }
    if (!verifyName(lastName) ) {
        alert('Invalid lastname. Please enter a valid lastname.');    
    }
    if (!verifyPhoneNumber(phoneNumber) ) {
        alert('Invalid phone number. Please enter a valid phone number.'); 
    }
    
}