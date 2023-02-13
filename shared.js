var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
console.dir(backdrop);

var selectPlanButtons = document.querySelectorAll('.plan button');

for (const ele of selectPlanButtons) {
    ele.addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}