//<h1 class="projectTitle">Проект: Открываем страницы истории</h1>
//<h1 class="MainTitle">Гродненцы, стоявшие у истоков Израиля.</h1>
//<h2>Семья Вильбушевич</h2>

var readMore = document.getElementsByClassName("readMore")[0];


readMore.addEventListener('click', function (event) {
    var paragraph = document.querySelector(".expand");

  

    if (paragraph.style.display === '') {
        paragraph.style.display = 'block';

        event.target.innerHTML = "Свернуть";

    } else { 
        paragraph.style.display = '';

        event.target.innerHTML = "Читать дальше";
   
    }
    
});


var prev = document.getElementById("prev");
var next = document.getElementById("next");

var slides = document.getElementsByClassName('slide');

slides = Array.from(slides);

function getActiveSlideIndex() {
    return slides.findIndex(function (slide) {
        if (slide.classList.contains('active')) {
            return true;
        }

        return false;
    });
}

function removeActiveSlideClass(index) {
    slides[index].classList.remove('active');
}

prev.addEventListener("click", function(event) {

    var activeSlideIndex =  getActiveSlideIndex();

    removeActiveSlideClass(activeSlideIndex);

    if (activeSlideIndex === 0) {
        slides[slides.length - 1].classList.add('active');
    } else {
    slides[activeSlideIndex - 1].classList.add('active');
    }
});

next.addEventListener("click", function(event) {
    var activeSlideIndex =  getActiveSlideIndex();

    removeActiveSlideClass(activeSlideIndex);

    if (activeSlideIndex === slides.length - 1) {
        slides[0].classList.add('active');
    } else {

    slides[activeSlideIndex + 1].classList.add('active');
    }
});
