
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

var expandMapButton = document.getElementById('expand-map-button');
var fullMap = document.getElementById('full-map')

expandMapButton.addEventListener('click', function (event) {
    var text = expandMapButton.childNodes[1];
    var arrow = expandMapButton.childNodes[0];
    if (fullMap.classList.contains('open__map')) {
        fullMap.classList.remove('open__map');
        arrow.classList.remove('arrow-up');
        text.innerText = 'Развернуть';
    } else {
        fullMap.classList.add('open__map');
        text.innerText = 'Свернуть';
        arrow.classList.add('arrow-up')
    }
});

var readAll = document.getElementsByClassName("readAll")[0];

readAll.addEventListener('click', function (event) {
    var paragraph = document.querySelector(".open");

    if (paragraph.style.display === '') {
        paragraph.style.display = 'block';

        event.target.innerHTML = "Свернуть";

    } else { 
        paragraph.style.display = '';

        event.target.innerHTML = "Читать дальше";
   
    }
    
});
