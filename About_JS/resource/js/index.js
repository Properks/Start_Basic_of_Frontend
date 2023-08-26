// Change text color
var heading = document.querySelector('#change-color-title')
heading.onclick = function() {
    heading.style.color = "red";
    alert('Title color is changed');
}

// Calculate age with variable
var calculateAge = document.querySelector('#calculate-age');
let age = (now, birth) => {return now - birth + 1}
calculateAge.onclick = function() {
    let nowYear = 2023;
    let birthYear = prompt("When are you born?");
    alert('You are ' + age(nowYear,birthYear));
}

// Check divisible with conditional
var checkDivisible = document.querySelector('#check-divisible');
checkDivisible.onclick = function() {
    var base = parseInt(document.getElementById('base-number').value);
    var divide = parseInt(document.getElementById("divide-number").value);
    

    if (checkNumber(base, divide)) {
        alert(base + ' / ' + divide + ' = ' + Math.floor(base/divide) + '...' + base%divide);
    }
}

function checkNumber(base, divide) {
    if (isNaN(base) || isNaN(divide)) {
        alert('Input doesn\'t exist or isn\'t number');
        return false;
    }
    else if (divide == 0) {
        alert('Denominator is 0')
        return false
    }
    return true;
}

// Multiplication tables with loop
let Multiplication = document.getElementById('multiplication-tables');
Multiplication.onclick = function() {
    document.write('<h2>Multiplication Tables</h2>');

    for(i = 1; i < 10; i++) {
        document.write("<div>");
        document.write('<h3>Multiplication table ' + i + '</h3>');
        
        for(j = 1; j < 10; j++) {
            document.write('<p>' + i +' x ' + j + ' = ' + i*j);
        }
        document.write("</div>");
    }
}

//Seat table
let seat = document.querySelector('#seat-table');
seat.onclick = function() {
    let seat = 1;
    let row = parseInt(document.getElementById('seat-table-row').value);
    let column = parseInt(document.getElementById('seat-table-column').value);

    document.write('<style>table, td {border: 1px solid black; border-collapse: collapse;} td {text-align: center;}</style>');
    document.write('<h3>Seat Table</h3>');
    document.write('<table>');
    for(i = 0; i < row; i++) {
        document.write('<tr>');
        for(j = 0; j < column; j++) {
            document.write('<td>' + seat++ + '</td>');
            console.log(row + column);
        }
        document.write('</tr>');
    }

    document.write('</table>');
    
}

// Event 
document.querySelector('#open-description').onclick = () => {
    document.getElementById('open-description').style.display = "none";
    document.getElementById('event-detail-description').style.display = "block";
}

document.querySelector('#event-detail-description').onclick = () => {
    document.getElementById('event-detail-description').style.display = "none";
    document.getElementById('open-description').style.display = "block";
}

let eventImage = document.querySelector('.event-img');
let lightbox = document.querySelector('#lightbox');
eventImage.addEventListener('click', (event) => {
    let srcLink = eventImage.getAttribute('src');
    lightbox.style.display = 'block';
    document.querySelector('#lightbox-image').setAttribute('src', srcLink);
})

lightbox.onclick = (event) => {
    lightbox.style.display = 'none';
}

// Object (Date)
{
let startTime;
let stopTime;
document.querySelector('#start-stop-watch').onclick = () => {
    if (document.getElementById('start-time').value == "" ||
    stopTime > startTime) {

        startTime = new Date();
        document.getElementById('start-time').value = startTime;
    }
    else {
        alert('Already started');
    }
}

document.querySelector('#stop-stop-watch').onclick = () => {
    if (startTime == null || stopTime > startTime) {
        alert('Need to press start');
    }
    else {
        stopTime = new Date();
        let timeDiff = stopTime - startTime;
        document.getElementById('stop-time').value = stopTime;
        alert(timeDiff / 1000 + 'sec');
    }
}
}

//Make Random Number
document.querySelector('#generate-random-number').onclick = () => {
    let minNumber = parseInt(document.getElementById('min-number').value);
    let maxNumber = parseInt(document.getElementById('max-number').value);
    if (isNaN(minNumber) || isNaN(maxNumber) || (minNumber + 1) >= maxNumber) {
        alert('Input isn\'t right');
    }
    else {
        let numberDiff = maxNumber - minNumber - 1;
        document.getElementById('random-number').innerText = 
        Math.floor(Math.random() * maxNumber % numberDiff + minNumber + 1); // use innerText
        // make numbers in range and plus minNumber, +1 is inorder not to contain min number.
    }
}

//Notice
function popUp() {
    let newWin = window.open('notice.html', 'notice', 'width=300, height=300');
    if (newWin == null) { // When pop-ups are blocked
        alert('Pop-ups are blocked');
    }
    let positionX = screen.availWidth / 2 - 150; // screen object
    let positionY = screen.availHeight/2 - 150;
    newWin.moveBy(positionX, positionY);
}

//Reload button
let reloadBtn = document.querySelector('.reload-btn');
reloadBtn.addEventListener("mouseover", (event) => {
    reloadBtn.style.border = '1px solid #ccc';
})

reloadBtn.addEventListener('mouseout', (event) => {
    reloadBtn.style.border = ''; // change to default
})

reloadBtn.addEventListener('mousedown', (event) => {
    reloadBtn.style.backgroundColor = 'aquamarine';
})

//See more 
function append() {
    document.getElementById('see-more').style.display = 'none';
    document.getElementById('simple-view').style.display = 'block';

    let container = document.getElementById('create-node-body');
    let newH5 = document.createElement('h5');

    let newText = document.createTextNode('The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. Nodes can have event handlers (also known as event listeners) attached to them. Once an event is triggered, the event handlers get executed.');

    newH5.appendChild(newText);
    container.appendChild(newH5);
}