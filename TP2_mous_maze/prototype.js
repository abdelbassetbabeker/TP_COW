


let walls = document.querySelectorAll("div.boundary");
let end = document.getElementById("end");
let start = document.getElementById("start");
let maze = document.getElementById("maze");




function youlose() {
    walls[0].classList.add('youlose')
    walls[1].classList.add('youlose')
    walls[2].classList.add('youlose')
    walls[3].classList.add('youlose')
    walls[4].classList.add('youlose')
}



start.addEventListener('click', () => (
    handlerStart()
)
)





//code



function handlerStart() {


    maze.addEventListener('mouseleave', e => {
        youlose()
    }
    )

    for (let i = 0; i <= walls.length; i++) {
        start.addEventListener('click', () => {
            walls[i].classList.remove('youlose')
        })
    }

    end.addEventListener('mouseover', () => {
        var testlose = walls[0].classList

        if (testlose[1] === 'youlose') {
            alert('You lose the game , Try again')
        }
        else {
            alert('You win exelent ')


        }
        window.location.reload(true)

    })
    for (let i = 0; i <= walls.length; i++) {
        walls[i].addEventListener('mouseover', youlose)
    };


}






