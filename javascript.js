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
function  checkForm() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  if (!verifyPhoneNumber(phoneNumber) ) {
    document.getElementById("phoneNumber").style.border="1px solid #FF0000"; 
  }
  if (!verifyName(firstName) ) {
    document.getElementById("firstname").style.border="1px solid #FF0000" ;    
  }
  if (!verifyName(lastName) ) {
    document.getElementById("lastname").style.border="1px solid #FF0000";    
  }
  }
function goBack() {
  window.history.back();
}