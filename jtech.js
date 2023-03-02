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
    const states = [];
    for (let i = 0; i < data.length; i++) {
        let notinclude = !states.includes(data[i].state);
        if (notinclude){
            states.push(data[i].state);
            let div = document.createElement("a");
            div.classList.add('nav-link');
            div.innerHTML = data[i].state ;
            mainContainer.appendChild(div);
        }
        
    }
}
