//get html container as the root
const container = document.querySelector("#container");
//get the clear button
const clear = document.querySelector("#clear");

//initial grid build
buildSquares(16);

//set up click listener
clear.addEventListener('click', function() {
    let rows = document.querySelectorAll(".row");
    //when click, clear the background color of the squares
    for(let i = 0; i < rows.length; i++) {
        container.removeChild(rows[i]);
    }

    let squareCount = 0;
    while(squareCount < 16 || squareCount > 100) {
        squareCount = prompt("select size of grid (16-100)");
    }

    buildSquares(squareCount)

})


function buildSquares(size) {
    //create rows and append to container
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
        //create 16 colums and append to their row
        for(let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.className = "square";
            //square.style.width = 30
            row.appendChild(square);
        }
    }

    //get all squares
    let squares = document.querySelectorAll(".square");
    //loop over squares
    for(let i = 0; i < squares.length; i++) {
        //add event listener for mouse over
        squares[i].addEventListener('mouseover', function() {
            //change background color
            squares[i].classList.add('hovered');
        })
    }

    //get width of parent div
    let containerWidth = document.getElementById('container').clientWidth
    //set width of squares to be containerWidth / squareCount
    let squareSize = containerWidth / size;

    for(let i = 0; i < squares.length; i++) {
        squares[i].style.width = `${squareSize}px`;
        squares[i].style.height = `${squareSize}px`;
    }
}
