document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    var emailId = document.getElementById("emailId");
    var registrationForm = document.getElementById("registrationForm");
    var thankYouMessage = document.getElementById("thankYouMessage");

    if (emailId.value.trim() !== "") {
      registrationForm.style.display = "none";
      thankYouMessage.style.display = "block";
    }
    else
    {
      registrationForm.style.display = "none";
    }
  });
