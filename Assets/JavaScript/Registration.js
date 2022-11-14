document.getElementById("form").addEventListener("submit", saveData);
function saveData(event) {
  event.preventDefault();
  var arr = JSON.parse(localStorage.getItem("PersonData")) || [];
  var Designation = document.getElementsByName("Designation");
  var des = Student;
  for (i = 0; i < Designation.length; i++) {
    if (Designation[i].checked) {
      des = Designation[i].value;
    }
  }
  var nameP = document.getElementById("name");
  var ageP = document.getElementById("age");
  if (nameP.value.length < 4) {
    alert("Name Should be at least 4 characters.");
  } else if (ageP.value < 18 || ageP.value > 40) {
    alert("Age Should be between 18 to 40.");
  } else {
    var personObj = {
      Id: Date.now(),
      Name: nameP.value,
      Age: ageP.value,
      Designation: des,
      Priority: document.getElementById("priority").value,
      Vaccine: document.getElementById("vaccine").value,
    };
    arr.push(personObj);
    localStorage.setItem("PersonData", JSON.stringify(arr));
    nameP.value = "";
    ageP.value = "";
    alert("Registration successfully");
  }
}
