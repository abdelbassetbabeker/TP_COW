


let walls = document.querySelectorAll("div.boundary");
let end = document.getElementById("end");



end.addEventListener('mouseover', () => {
    var testlose = walls[0].classList
    console.log(testlose[1])

    if (testlose[1] === 'youlose') {
        alert('You lose the game , Try again')
    }
    else {
        alert('You win exelent ')

    }
});

for (let i = 0; i <= walls.length; i++) {
    walls[i].addEventListener('mouseover', () => {
        walls[0].classList.add('youlose')
        walls[1].classList.add('youlose')
        walls[2].classList.add('youlose')
        walls[3].classList.add('youlose')
        walls[4].classList.add('youlose')


    })

};




