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
    var base = document.getElementById('base-number').value;
    var divide = document.getElementById("divide-number").value;
    

    if (base == "" || divide == "" || divide == 0) {
        alert('Input doesn\'t exist or denominator is 0');
    }
    else {
        alert(base + ' / ' + divide + ' = ' + Math.floor(base/divide) + '...' + base%divide);
    }
}