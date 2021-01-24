function getData() {
    fetch('https://trainingsfirstapi.herokuapp.com/data')
    .then(response => response.json())
    .then(json => {
        mainUl = document.getElementById("mainUl")
        for (let i = 0; i < json.length; i++) {
            var li = document.createElement("li")
            li.innerHTML = "ID: " + json[i].Id + ", Name: " + json[i].Name;
            li.className = "list-group-item"
            li.style.backgroundColor = "aqua"
            li.style.color = "red"
            mainUl.appendChild(li);
        }
    })
}