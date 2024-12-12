let columnMaxes = [] //contains the highest placed token per column
let boardState = [] //contains all the tokens in a 2d array
let turn = 1 //dictates whos turn it is, X=1, O=2 

let debug = document.getElementById("debug")
let turnDisplay = document.getElementById("turn-display")

let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let button4 = document.getElementById("b4")
let button5 = document.getElementById("b5")
let button6 = document.getElementById("b6")
let button7 = document.getElementById("b7")

function setup() {
    let setupAssist = []
    //sets up boardState by setting up 2d array, [[column][column]...]
    for (let a = 0; a < 7; a++) {
        for (let b = 0; b < 6; b++) {
            setupAssist.push(".")
        }
    boardState.push(setupAssist)
    setupAssist=[]
    }
    //sets up columnMaxes, just a 1d arrray
    for (let c = 0; c < 7; c++) {
        columnMaxes.push(0)
    }
}

function place(row) {
    //checks if column is full
    if (columnMaxes[row] >= 6) {
        //column is full
        //pass
    } else {
        //column is not full, placing token:
        let currentColumn = boardState[row]
        if (turn == 1) { //its X's turn
            currentColumn.splice(columnMaxes[row], 1, "X")
            boardState.splice(row, 1, currentColumn)
        } else if (turn == 2) { //its's O's turn
            currentColumn.splice(columnMaxes[row], 1, "O")
            boardState.splice(row, 1, currentColumn)
        }
        currentColumn = []
        let newColumnMax = columnMaxes[row]
        columnMaxes.splice(row, 1, newColumnMax + 1)
        
        turn = 3 - turn
        //displays current turn
        if (turn == 1) {
            turnDisplay.innerText = "X is placing"
        } else if (turn == 2) {
            turnDisplay.innerText = "O is placing"
        }
    }
    button1.innerText = boardState[0].toReversed().join("")
    button2.innerText = boardState[1].toReversed().join("")
    button3.innerText = boardState[2].toReversed().join("")
    button4.innerText = boardState[3].toReversed().join("")
    button5.innerText = boardState[4].toReversed().join("")
    button6.innerText = boardState[5].toReversed().join("")
    button7.innerText = boardState[6].toReversed().join("")

    //debug.innerText = boardState + "|" + columnMaxes
}
function switchTurn() {
    turn = 3 - turn
    if (turn == 1) {
        turnDisplay.innerText = "X is placing"
    } else if (turn == 2) {
        turnDisplay.innerText = "O is placing"
    }
}

setup()
//debug help tool
//debug.innerText = boardState + "|" + columnMaxes

//displays current turn
if (turn = 1) {
    turnDisplay.innerText = "X is placing"
} else if (turn = 2) {
    turnDisplay.innerText = "O is placing"
}

