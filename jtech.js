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
    let mainContainer = document.getElementById("pills-tab");
    // let cardContainer = document.getElementById("place");
    let tabDetails = document.getElementById("pills-tabContent");
    const states = [];
    for (let i = 0; i < data.length; i++) {
        // states nav tab
        let notinclude = !states.includes(data[i].state);
        var dstate = data[i].state.split(" ").join("");
        if (notinclude){
            states.push(dstate);
            let div = document.createElement("li");
            div.classList.add('nav-item');
            div.setAttribute("role","presentation");
            div.innerHTML = '<button class="nav-link" id="pills-'+dstate+'-tab" data-bs-toggle="pill" data-bs-target="#pills-'+dstate+'" type="button" role="tab" aria-controls="pills-'+dstate+'" aria-selected="false">'+data[i].state+'</button>';
            mainContainer.appendChild(div);

            // specific states
            let tab = document.createElement("div");
            tab.classList.add('tab-pane', 'fade');
            tab.setAttribute("id","pills-"+dstate);
            tab.setAttribute("role","tabpanel");
            tab.setAttribute("aria-labelledby","pills-"+dstate+"-tab");
            tab.innerHTML = '<div id="place'+dstate+'" class="places-card"></div>';
            tabDetails.appendChild(tab);
            let tabc = document.getElementById("place"+dstate);
            let nstate = data[i].state;
            console.log(nstate);
            for (let j = 0; j < data.length; j++) {
                console.log(data[j].state);
                if (data[j].state == nstate){
                    tabc.innerHTML += '<div class="col-sm-4"><div class="card"><img class="card-img-top" src="'+data[j].image+'" alt="Card image cap"><div class="card-body"><h1 class="card-title">'+data[j].name+'</h1><p class="card-text">'+data[j].address+'</p><h1 class="card-title">Operation Hour</h1><p class="card-text">'+data[j].operation_hours+'</p></div><ul class="list-group list-group-flush"><div class="card-body"><h1 class="card-title">Telephone</h1><p class="card-text">'+data[j].phone+'</p></div></ul></div></div>';
                };
            };
        };
    };

    let cardContainer = document.getElementById("pills-tabContent");
    let tab = document.createElement("div");
    tab.classList.add('tab-pane', 'fade', 'active', 'show');
    tab.setAttribute("id","pills-default");
    tab.setAttribute("role","tabpanel");
    tab.setAttribute("aria-labelledby","pills-default-tab");
    tab.innerHTML = '<div id="default" class="places-card"></div>';
    cardContainer.appendChild(tab);
    let tabc = document.getElementById("default");
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == true){
            tabc.innerHTML += '<div class="col-sm-4"><div class="card"><img class="card-img-top" src="'+data[i].image+'" alt="Card image cap"><div class="card-body"><h1 class="card-title">'+data[i].name+'</h1><p class="card-text">'+data[i].address+'</p><h1 class="card-title">Operation Hour</h1><p class="card-text">'+data[i].operation_hours+'</p></div><ul class="list-group list-group-flush"><div class="card-body"><h1 class="card-title">Telephone</h1><p class="card-text">'+data[i].phone+'</p></div></ul></div></div>';
            // Get.innerHTML = cardContainer;
        }
    }
}


