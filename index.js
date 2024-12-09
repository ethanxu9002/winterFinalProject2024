let displayList = []
let width = 7
let height = 6

let everything = []
let columnMax = []

let setupAssist = []

let pendPlace = 0

/*█
document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    alert('hi.');
  }
});
*/

let display = document.getElementById("display-El")


function setup() {
    for (let a = 0; a < width*height; a++) {
        displayList.push(". ")
    }
    for (let b = 0; b <7; b++) {
        displayList.push((b+1)+" ")
    }
    for (let c = 0; c < width; c++) {
        for (let d = 0; d < 6; d++) {
            setupAssist.push(0)
        }
        everything.push(setupAssist)
        setupAssist = []
    }

    for (let e = 0; e < width; e++) {
        columnMax.push(0)
    }
}

function isNotZero(value) {
    return value != 0
}

function placeX() {
    pendPlace=prompt("Which row?")
    if (columnMax[pendPlace - 1] > height) {
        //pass
    } else if (pendPlace < width) {
        //pass
    } else if (pendPlace > width) {
        //pass
    } else {
        everything[pendPlace].splice(columnMax[pendPlace], 1, "X")
        columnMax[pendPlace]++
    }
}
function placeO() {
    pendPlace=prompt("Which row?")
    if (columnMax[pendPlace - 1] > height) {
        //pass
    } else if (pendPlace < width) {
        //pass
    } else if (pendPlace > width) {
        //pass
    } else {
        everything[pendPlace].splice(columnMax[pendPlace], 1, "O")
        columnMax[pendPlace]++
    }
}

setup()

display.style.width=(width*2)+"ch"
display.innerText = displayList.join("") + columnMax
console.log(screen)

