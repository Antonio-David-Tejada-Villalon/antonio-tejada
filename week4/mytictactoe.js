//Array
const game = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
];

let currentUser = 'O';

function checkStatus(user){
    if(game[0][0] === user && game[0][1] === user && game[0][2] === user){
        return true;
    }
    if(game[1][0] === user && game[1][1] === user && game[1][2] === user){
        return true;
    }
    if(game[2][0] === user && game[2][1] === user && game[2][2] === user){
        return true;
    }
    if(game[0][0] === user && game[1][0] === user && game[2][0] === user){
        return true;
    }
    if(game[0][1] === user && game[1][1] === user && game[2][1] === user){
        return true;
    }
    if(game[0][2] === user && game[1][2] === user && game[2][2] === user){
        return true;
    }
    if(game[0][0] === user && game[1][1] === user && game[2][2] === user){
        return true;
    }
    if(game[0][2] === user && game[1][1] === user && game[2][0] === user){
        return true;
    }
    return false;
}

function setWinner(user){
        alert(`The winner is ${user}`);
};

//Function about event listener clicking
function selectItem(){
    game[this.dataset.row][this.dataset.column] = currentUser;
    setBoard();
    if(checkStatus(currentUser)){
        setWinner(currentUser);
    }


    if(currentUser == 'O'){
        currentUser = 'X';
    }else{
        currentUser = 'O';
    }
    console.log(this.textContent);
};

//Creating the element on the page
function render({content, row, column}, container){
    const el = document.createElement('span');
    el.textContent = `${content} [${row}][${column}]`;
    el.dataset.row = row;
    el.dataset.column = column;
    el.addEventListener('click', selectItem);
    container.append(el);
};

//Looping the array with rows and columns, forEach because I don't need to store anything and I have an object in render
function setBoard(){
    container.innerHTML = '';
    game.forEach((row, indexRow)=>{
        row.forEach((column, indexColumn) =>{
            render({
                content: column,
                row: indexRow,
                column: indexColumn,
            }, window.container);
        })
    })
};

setBoard();