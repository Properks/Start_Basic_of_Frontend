// Change text color
var heading = document.querySelector('#change-color-title')
heading.onclick = function() {
    heading.style.color = "red";
    alert('Title color is changed');
}

// Calculate age with variable
var calculateAge = document.querySelector('#calculate-age');
calculateAge.onclick = function() {
    var now = 2023;
    var birthYear = prompt("When are you born?");
    age = now - birthYear + 1;
    alert('You are ' + age);
}

// Check divisible with conditional
var checkDivisible = document.querySelector('#check-divisible');
checkDivisible.onclick = function() {
    var base = parseInt(document.getElementById('base-number').value);
    var divide = parseInt(document.getElementById("divide-number").value);
    

    if (isNaN(base) || isNaN(divide)) {
        alert('Input doesn\'t exist or isn\'t number');
    }
    else if (divide == 0) {
        alert('Denominator is 0')
    }
    else {
        alert(base + ' / ' + divide + ' = ' + Math.floor(base/divide) + '...' + base%divide);
    }
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

let seat = document.querySelector('#seat-table');
seat.onclick = function() {
    document.write('<h3>Seat Table</h3>');

    
}