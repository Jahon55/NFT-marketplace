function loadSection(sectionName) {
  fetch(`${sectionName}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(`${sectionName}-placeholder`).innerHTML = data;
    });
}
loadSection("header");
loadSection("footer");
