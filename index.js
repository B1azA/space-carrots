const home_btn = document.getElementById("home_btn");
const project_btn = document.getElementById("project_btn");
const news_btn = document.getElementById("news_btn");
const about_btn = document.getElementById("about_btn");
const language_btn = document.getElementById("language_btn");

const home = document.getElementById("home");
const project = document.getElementById("project");
const news = document.getElementById("news");
const about = document.getElementById("about_us");

const menu = document.getElementById("menu");

home_btn.onclick = function() {
    home.scrollIntoView();
    document.documentElement.scrollBy(0, -menu.clientHeight);
}

project_btn.onclick = function() {
    project.scrollIntoView();
    document.documentElement.scrollBy(0, -menu.clientHeight);
}

news_btn.onclick = function() {
    news.scrollIntoView();
    document.documentElement.scrollBy(0, -menu.clientHeight);
}

about_btn.onclick = function() {
    about.scrollIntoView();
    document.documentElement.scrollBy(0, -menu.clientHeight);
}

let language_menu = document.createElement("language_menu");

// language_btn.onclick = function() {
//     document.appendChild(language_menu);
// }

function stars() {
    let count = 75;
    let scene = document.getElementById("home");
    let i = 0;
    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 2;
        let h = Math.random() * 100;
        star.style.position = "absolute";
        star.style.left = x + "px";
        star.style.width = 1 + "px";
        star.style.height = h + "px";
        star.style.animationDuration = duration + "s";

        scene.appendChild(star);
        i++;
    }
}

let carrot = document.getElementById("carrot");
let home_text = document.getElementById("home-text");
let home_title = document.getElementById("home-title");

function resize() {
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    let carrot_width = carrot.clientWidth;
    let carrot_height = carrot.clientHeight;
    let average = Math.sqrt(window_width * window_height);
    
    console.log(window_width);
    console.log(window_height);
    console.log(carrot_width);
    console.log(carrot_height);
    
    carrot.style.height = window_height / 2 + "px";
    carrot.style.marginLeft = (window_width / 4) + "px";
    carrot.style.marginRight = (window_width / 8) + "px";

    // home.style.width = window_height + "px";

    home_text.style.marginTop = average / 5 + "px";
    home_text.style.width = window.innerWidth + "px"; // delete if text overflows

    home.style.minHeight = window_height + "px";
    home.style.height = window_height + "px";

    home_title.style.marginTop = menu.clientHeight + average / 10 + "px";
    let centre = (window_width / 2) - (home_title.clientWidth / 2);
}

window.onresize = function() {
    resize();
}

resize();
stars();