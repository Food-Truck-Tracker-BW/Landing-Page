const sliderReviews = document.querySelector('.sliderReviews');
const leftArrowReviews = document.querySelector('.leftReviews');
const rightArrowReviews = document.querySelector('.rightReviews');
const indicatorParentsReviews = document.querySelector('.controlsReviews ul');

let sectionIndexReviews = 0;

function setIndexReviews() {
    document.querySelector('.controlsReviews .selectedReviews').classList.remove('selectedReviews');
    sliderReviews.style.transform = 'translate(' + (sectionIndexReviews) * -12.5 + '%)';
};

document.querySelectorAll('.controlsReviews li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        sectionIndexReviews = index;
        setIndexReviews(sectionIndexReviews);
        indicator.classList.add('selectedReviews');
    });
});

leftArrowReviews.addEventListener('click', function() {
    sectionIndexReviews = (sectionIndexReviews > 0) ? sectionIndexReviews - 1 : 0;
    setIndexReviews(sectionIndexReviews);
    indicatorParentsReviews.children[sectionIndexReviews].classList.add('selectedReviews');
})

rightArrowReviews.addEventListener('click', function() {
    sectionIndexReviews = (sectionIndexReviews < 7) ? sectionIndexReviews + 1 : 7;
    setIndexReviews(sectionIndexReviews);
    indicatorParentsReviews.children[sectionIndexReviews].classList.add('selectedReviews');
})