const collapsible = document.querySelectorAll('.collapsible');
console.log('made in conjunction with ajkeshmiri.com');
const answer = document.querySelectorAll('#answer');

function clicked(i) {
    answer[i].classList.toggle('hide');
}

collapsible[0].addEventListener('click', function () {
    clicked(0);
})
collapsible[1].addEventListener('click', function () {
    clicked(1);
})
collapsible[2].addEventListener('click', function () {
    clicked(2);
})
collapsible[3].addEventListener('click', function () {
    clicked(3);
})