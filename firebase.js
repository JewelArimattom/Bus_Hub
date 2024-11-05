const firebaseConfig = {
    apiKey: "AIzaSyDhp-85wjKSyp6Po9xTX8H_EhRvJ2Gtw8I",
    authDomain: "bushub-a1bb8.firebaseapp.com",
    databaseURL: "https://bushub-a1bb8-default-rtdb.firebaseio.com",
    projectId: "bushub-a1bb8",
    storageBucket: "bushub-a1bb8.appspot.com",
    messagingSenderId: "175662637034",
    appId: "1:175662637034:web:e9207585bb7fbb6ee55c93"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  