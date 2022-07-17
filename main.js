function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "chibuzodaniel71@gmail.com",
    Password: "Megastakings.00",
    To: "chibuzoragbo2gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body:
      "name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
