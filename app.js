const collapsible = document.querySelectorAll('.collapsible');
const answer = document.querySelectorAll('#answer');


collapsible[0].addEventListener('click', function () {
    answer[0].classList.toggle('hide');
    answer[0].classList.toggle('show');
})
collapsible[1].addEventListener('click', function () {
    answer[1].classList.toggle('hide');
    answer[1].classList.toggle('show');
})
collapsible[2].addEventListener('click', function () {
    answer[2].classList.toggle('hide');
    answer[2].classList.toggle('show');
})
collapsible[3].addEventListener('click', function () {
    answer[3].classList.toggle('hide');
    answer[3].classList.toggle('show');
})
