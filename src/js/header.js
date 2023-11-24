fetch("./components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  })
  .catch((error) => console.error("Ошибка при загрузке HTML-файла:", error));

var cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = './css/header.css'

document.head.appendChild(cssLink);