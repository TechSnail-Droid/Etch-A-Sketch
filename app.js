let color = 'black';

function gridMaker(size) {

let grid = document.querySelector('.grid') // grabs the title grid from the html doc
let squares = grid.querySelectorAll('div')
squares.forEach((div)=> div.remove()); // resets the blank space

grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let limit = size * size;

for(let i = 0; i <limit; i++){ // for loop cycles through a number and creates a div with the color blue because we used createElment and background color functions, then appended it
    const square = document.createElement('div');
    square.addEventListener('mouseover', colorGrid) // when a mouseover action occurs, run the colorSquare function
    square.style.backgroundColor='white'
    grid.appendChild(square)
}
}

function colorGrid(){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`;
        
    }
    else{
        this.style.backgroundColor = color;
    }
   
}
function changeColor(option){
    color = option;
   
}
function clearGrid(){
    let grid = document.querySelector('.grid') // grabs the title grid from the html doc
    let squares = grid.querySelectorAll('div')
    squares.forEach((div)=> div.style.backgroundColor = 'white');
}


function changeSize(input){
    if (input < 2){
        alert('Not enough squares');
    }
    if (input > 100){
        alert('Too many squares');
    }
    else{
        gridMaker(input);
    }
    
   }
function randomBackground(){
    const button = document.getElementById('randomButton');
        let color = '#';
        color += Math.random().toString(16).slice(2,8);
       button.style.backgroundColor = color;
    
    
}
  