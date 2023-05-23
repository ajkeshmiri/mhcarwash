const collapsible = document.querySelectorAll('.collapsible');
const answer = document.querySelectorAll('#answer');


collapsible[0].addEventListener('click', function () {
    console.log('hello');
    answer[0].classList.toggle('hide');
})
collapsible[1].addEventListener('click', function () {
    console.log('hello');
    answer[1].classList.toggle('hide');
})
collapsible[2].addEventListener('click', function () {
    console.log('hello');
    answer[2].classList.toggle('hide');
})