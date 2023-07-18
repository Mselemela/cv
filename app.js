function info() {
  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let result = document.getElementById("result");

  if (name == "") {
    result.style.color = "red";
    result.innerHTML = "First name is required";
    return;
  }

  if (lname == "") {
    result.style.color = "red";
    result.innerHTML = "Last name is required";
    return;
  }

  if (email == "") {
    result.style.color = "red";
    result.innerHTML = "Email is required";
    return;
  }

  if (message == "") {
    result.style.color = "red";
    result.innerHTML = "Message is required";
    return;
  } else {
    openAddTeamModal();
    result.innerHTML = "";
  }
}

const addTeamModal = document.getElementById("addTeamModal");

function openAddTeamModal() {
  addTeamModal.showModal();
}

function closeAddTeamModal() {
  addTeamModal.close();
}
