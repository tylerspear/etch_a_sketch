//get html container as the root
const container = document.querySelector("#container");

//create 16 rows and append to container
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    //create 16 colums and append to their row
    for(let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.className = "square";
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

