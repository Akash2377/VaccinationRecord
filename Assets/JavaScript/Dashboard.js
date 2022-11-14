var PersonData = JSON.parse(localStorage.getItem("PersonData")) || [];
window.addEventListener("load", function () {
  displayData(PersonData);
});
function displayData(PersonData) {
  document.querySelector("tbody").innerHTML = "";
  PersonData.map(function (elm, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elm.Name;
    var td2 = document.createElement("td");
    td2.innerText = elm.Age;
    var td3 = document.createElement("td");
    td3.innerText = elm.Designation;
    var td4 = document.createElement("td");
    td4.innerText = elm.Priority;
    var td5 = document.createElement("td");
    td5.innerText = elm.Vaccine;
    var td6 = document.createElement("td");
    td6.innerText = Math.floor(1000 + Math.random() * 9000);
    var td7 = document.createElement("td");
    td7.innerHTML =
      "<i class='fa-solid fa-trash-can' style = 'color:red ; cursor : pointer'></i>";
    td7.childNodes[0].addEventListener("click", function () {
      deleteData(index);
    });
    var td8 = document.createElement("td");
    td8.innerHTML =
      "<i class='fa-solid fa-plus' style = 'color:green ; cursor : pointer'></i>";
    td8.childNodes[0].addEventListener("click", function () {
      AddData(index);
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);
  });
}
function deleteData(index) {
  PersonData.splice(index, 1);
  localStorage.setItem("PersonData", JSON.stringify(PersonData));
  displayData(PersonData);
}
function AddData(index) {
  console.log(index);
  var vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];
  vaccinated.push(PersonData[index]);
  localStorage.setItem("vaccinated", JSON.stringify(vaccinated));
  PersonData.splice(index, 1);
  localStorage.setItem("PersonData", JSON.stringify(PersonData));
  displayData(PersonData);
}
function handleSortByAge() {
  var temp = document.getElementById("sba").value;
  if (temp == "Descending") {
    PersonData.sort(function (a, b) {
      return b.Age - a.Age;
    });
    displayData(PersonData);
  }
  if (temp == "Ascending") {
    PersonData.sort(function (a, b) {
      return a.Age - b.Age;
    });
    displayData(PersonData);
  }
}
function handleFilterVaccine() {
  var temp = document.getElementById("fltV").value;

  var filteredList = PersonData.filter(function (el) {
    if (temp == "All" || temp == "") {
      return true;
    } else {
      return el.Vaccine == temp;
    }
  });
  displayData(filteredList);
}
function handleFilterPriority() {
  var temp = document.getElementById("fltP").value;
  var filteredList = PersonData.filter(function (el) {
    if (temp == "All" || temp == "") {
      return true;
    } else {
      return el.Priority == temp;
    }
  });
  displayData(filteredList);
}
