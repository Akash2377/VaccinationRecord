var vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];
window.addEventListener("load", function () {
  displayData(vaccinated);
});
function displayData(vaccinated) {
  document.querySelector("tbody").innerHTML = "";
  vaccinated.map(function (elm, index) {
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
    var td8 = document.createElement("td");
    td8.innerHTML =
      "<i class='fa-solid fa-check' style = 'color:green ; cursor : pointer'></i>";
    tr.append(td1, td2, td3, td4, td5, td8);
    document.querySelector("tbody").append(tr);
  });
}
