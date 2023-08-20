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