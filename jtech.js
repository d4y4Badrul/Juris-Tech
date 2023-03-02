fetch('stores.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("nav-place");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("a");
        div.classList.add('nav-link');
        div.innerHTML = data[i].state ;
        mainContainer.appendChild(div);
    }
}