const sliderAbout = document.querySelector('.sliderAbout');
const leftArrowAbout = document.querySelector('.leftAbout');
const rightArrowAbout = document.querySelector('.rightAbout');
const indicatorParentsAbout = document.querySelector('.controlsAbout ul');

let sectionIndexAbout = 0;

function setIndexAbout() {
    document.querySelector('.controlsAbout .selectedAbout').classList.remove('selectedAbout');
    sliderAbout.style.transform = 'translate(' + (sectionIndexAbout) * -12.5 + '%)';
};

document.querySelectorAll('.controlsAbout li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        sectionIndexAbout = index;
        setIndexAbout(sectionIndexAbout);
        indicator.classList.add('selectedAbout');
    });
});

leftArrowAbout.addEventListener('click', function() {
    sectionIndexAbout = (sectionIndexAbout > 0) ? sectionIndexAbout - 1 : 0;
    setIndexAbout(sectionIndexAbout);
    indicatorParentsAbout.children[sectionIndexAbout].classList.add('selectedAbout');
})

rightArrowAbout.addEventListener('click', function() {
    sectionIndexAbout = (sectionIndexAbout < 7) ? sectionIndexAbout + 1 : 7;
    setIndexAbout(sectionIndexAbout);
    indicatorParentsAbout.children[sectionIndexAbout].classList.add('selectedAbout');
})