const sliderAbout = document.querySelector('.slider');
const leftArrowAbout = document.querySelector('.left');
const rightArrowAbout = document.querySelector('.right');
const indicatorParentsAbout = document.querySelector('.controls ul');

let sectionIndexAbout = 0;

function setIndexAbout() {
    document.querySelector('.controls .selected').classList.remove('selected');
    sliderAbout.style.transform = 'translate(' + (sectionIndexAbout) * -12.5 + '%)';
};

document.querySelectorAll('.controls li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        sectionIndexAbout = index;
        setIndex(sectionIndexAbout);
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function() {
    sectionIndexAbout = (sectionIndexAbout > 0) ? sectionIndexAbout - 1 : 0;
    setIndex(sectionIndexAbout);
    indicatorParents.children[sectionIndexAbout].classList.add('selected');
})

rightArrow.addEventListener('click', function() {
    sectionIndexAbout = (sectionIndexAbout < 7) ? sectionIndexAbout + 1 : 7;
    setIndex(sectionIndexAbout);
    indicatorParents.children[sectionIndexAbout].classList.add('selected');
})