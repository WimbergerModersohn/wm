var li;
const landingImgs = [
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0175.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0071.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_9EE5DA0B-52A3-44B8-8101-1CBA539792B1.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0091.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_99D51AFF-6302-4096-ABBB-F7581CDB7982.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0154.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0349.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0430.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0613.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0777.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0814.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_0920.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_963b70a7-6f09-4a0b-a98f-261ec68425de.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_1195.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_1730.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_1748.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_3608.JPG",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_5483.jpeg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_5483.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_7275.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_7318.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_8228.jpg",
    "assets/0_2_0_2_Content/0_LandingPage/Fotos/WMA_8336.jpg"
];
nbImg = landingImgs.length;

document.addEventListener('DOMContentLoaded', (event) => {
    randomLandImg();
    document.getElementById("scroll-section").onscroll = function () {
        // bg color change, class background + landing-out class toggled
        if (document.getElementById("landing-slides").getBoundingClientRect().top < -50){
        Array.from(document.getElementsByClassName("background")).forEach(function(element){
            element.classList.add("landing-out");
        })
        } else {
            document.getElementById('mobile-info').innerHTML = "";
            if (document.body.classList.contains("landing-out")){
                Array.from(document.getElementsByClassName("background")).forEach(function(element){
                element.classList.remove("landing-out");
                })
            };
        }
        // info section move out
        document.getElementById("landing-info").style.top = String(document.getElementById("landing-slides").getBoundingClientRect().top / 10 + 20)+"px";
        

        // menu sliding
        let clientHeight = document.documentElement.clientHeight
        let projects = Array.from(document.querySelectorAll('.project'))
        let titlesT = Array.from(document.querySelectorAll('.title-t'))
        let titlesB = Array.from(document.querySelectorAll('.title-b'))
        projects.forEach(function(element, index){
            element.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            if (element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2 - clientHeight / 2 < 100) {
                if (!titlesB[index].classList.contains("hidden")){
                    titlesB[index].classList.add("hidden");
                };
                if (titlesT[index].classList.contains("hidden")){
                    titlesT[index].classList.remove("hidden");
                };
                document.getElementById('mobile-info').innerHTML = titlesT[index].innerHTML
            }
            else if (element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2 - clientHeight / 2 > 300) {
                if (!titlesT[index].classList.contains("hidden")){
                    titlesT[index].classList.add("hidden");
                };
                if (titlesB[index].classList.contains("hidden")){
                    titlesB[index].classList.remove("hidden");
                };
            }
            // else : scroll between 10 & 300 -> scroll / distance(upper-lower)
        });
    };

    // add menu button eventlisteners
    let tTitles = Array.from(document.querySelectorAll('.title-t'));
    let bTitles = Array.from(document.querySelectorAll('.title-b'));
    let mTitles = Array.from(document.querySelectorAll('.title-m'));
    let projects = Array.from(document.querySelectorAll('.project'));
    tTitles.forEach(function (element, index) {
        element.addEventListener('click', function () {
            document.getElementById('scroll-section').scrollTo({
                top: projects[index].offsetTop,
                behavior: 'smooth'
            })
        })
    });
    bTitles.forEach(function (element, index) {
        element.addEventListener('click', function () {
            document.getElementById('scroll-section').scrollTo({
                top: projects[index].offsetTop,
                behavior: 'smooth'
            })
        })
    });
    mTitles.forEach(function (element, index) {
        element.addEventListener('click', function () {
            document.getElementById('scroll-section').scrollTo({
                top: projects[index].offsetTop,
                behavior: 'smooth'
            })
        })
    });
    document.getElementById('home-button').addEventListener('click', function(){
        document.getElementById('scroll-section').scrollTo({ top: 0, behavior: 'smooth' });
        randomLandImg();
    });
    document.getElementById('landing-img').addEventListener('click', function(){
        randomLandImg();
    });
});

function randomLandImg() {
    var randNb = () => {return Math.floor(Math.random()*nbImg)};
    var ne;
    ne = randNb();
    while (ne == li) {
        ne = randNb();
    }
    li = ne;
    document.getElementById("landing-img").src = landingImgs[li];
}