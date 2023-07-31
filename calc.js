var btn = document.querySelectorAll('button');
var res = document.getElementById('res');
var findCalc = document.querySelector('#findCalc');
var posneg = document.querySelector('#posneg');
var ce = document.querySelector('#ce');
var c = document.querySelector('#c');
var backspace = document.querySelector('#backspace');
var percentage = document.querySelector('#perc');

var temp = "";
var Spe = ['+', '-', '*', '/', '.'];
findCalc.addEventListener('click', function () {
    var lastChar = res.value.charAt(res.value.length - 1);
    if (lastChar == Spe) {
        res.value = res.value;
    }
    else {
        temp += res.value;
        res.value = eval(res.value);
        // hist.innerHTML = temp + " = " + res.value;
    }
})

//CE(Clear Entry (Clear All))Button Logic
ce.addEventListener('click', function () {
    var lastIndex = -1;
    for (var i = res.value.length - 1; i >= 0; i--) {
        if (Spe.includes(res.value[i])) {
            lastIndex = i;
            break;
        }
    }
    res.value = res.value.substring(0, lastIndex + 1);
})

//C(Clear)Button Logic
c.addEventListener('click', function () {
    res.value = "";
})

// Backspace Logic
backspace.addEventListener('click', function () {
    res.value = res.value.substring(0, res.value.length - 1);
})

//Percentage Logic
percentage.addEventListener('click', function () {
    res.value = res.value / 100;
})

// +/- Logic
posneg.addEventListener('click', () => {
    var lastChar = res.value.charAt(res.value.length - 1);
    if (Spe.includes(lastChar)) {
        res.value = res.value.slice(2, 3);
    }
    else {
        res.value = res.value.substring(0, res.value.length - 1);
        lastChar = -lastChar;
        res.value += "(" + lastChar + ")";
    }
})

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        // alert(this.value);
        var lastChar = res.value.charAt(res.value.length - 1);

        if (Spe.includes(lastChar)) {
            if (Spe.includes(this.value)) {
                res.value = res.value.substring(0, res.value.length - 1) + this.value;
            }
            else {
                res.value += this.value;
            }
        }
        else {
            res.value += this.value;
        }
    })
}

