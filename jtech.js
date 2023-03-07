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

    //header menu
    const navBtn = document.querySelector('#menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    navBtn.addEventListener('click', () => {
      navLinks.classList.add('activated');
      const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
      navBtn.setAttribute('aria-expanded', !isExpanded);
      !isExpanded && nav.classList.add('active');
    })
    
    //INTERSECTION OBSERVER
    
    const navObs = new IntersectionObserver((entries) => nav.classList.toggle('active', !entries[0].isIntersecting)
    , {threshold: .85})
    
    navObs.observe(document.querySelector('header'));
    
    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('faded');
          fadeUpObserver.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '-15%'
    })
    
    document.querySelectorAll('.fade-up').forEach(el => {
      fadeUpObserver.observe(el);
    })

//places tab menu
function appendData(data) {
    let mainContainer = document.getElementById("pills-tab");
    let cdrMobile = document.getElementById("pills-tab1");
    let tabDetails = document.getElementById("pills-tabContent");
    const states = [];
    mainContainer.innerHTML = '<li class="nav-item" role="presentation"><button class="nav-link" id="pills-default-tab" data-bs-toggle="pill" data-bs-target="#pills-default" type="button" role="tab" aria-controls="pills-default" aria-selected="false"></button></li>';
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

            let divm = document.createElement("li");
            divm.classList.add('nav-item');
            divm.setAttribute("role","presentation");
            divm.innerHTML = '<button class="nav-link" id="pills-'+dstate+'-tab" data-bs-toggle="pill" data-bs-target="#pills-'+dstate+'" type="button" role="tab" aria-controls="pills-'+dstate+'" aria-selected="false">'+data[i].state+'</button>';
            cdrMobile.appendChild(divm);

            // specific states
            let tab = document.createElement("div");
            tab.classList.add('tab-pane', 'fade');
            tab.setAttribute("id","pills-"+dstate);
            tab.setAttribute("role","tabpane");
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

    //all true status
    let cardContainer = document.getElementById("pills-tabContent");
    let tab = document.createElement("div");
    tab.classList.add('tab-pane', 'fade', 'active', 'show');
    tab.setAttribute("id","pills-default");
    tab.setAttribute("role","tabpane");
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


