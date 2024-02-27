function checkLoyaltyPoints() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber === "+60173527250") {
        localStorage.setItem("phoneNumber", phoneNumber);
      window.location.href = "page2.html";
    } else {
      alert("Invalid phone number. Please enter +60173527250");
    }
}

  function submitForm() {
    const name = document.getElementById("name").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const phoneNumber = localStorage.getItem("phoneNumber");

    const birthday = `${year}-${month}-${day}`;
    localStorage.setItem("name", name);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("email", email);

    window.location.href = "page3.html";
}

function displayData() {
    document.getElementById("phoneNumber").innerText = localStorage.getItem("phoneNumber");
    document.getElementById("name").innerText = localStorage.getItem("name");
    document.getElementById("email").innerText = localStorage.getItem("email");
    document.getElementById("birthday").innerText = localStorage.getItem("birthday");
}
  
displayData();
  