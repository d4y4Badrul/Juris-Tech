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
        states = [];
        console.log(states);
        let s = data[i].state;
        console.log('s');
        if (!states.includes(s)){
            states.push(s);
            let div = document.createElement("a");
            div.classList.add('nav-link');
            div.innerHTML = s ;
            mainContainer.appendChild(div);
        }
        
    }
}
