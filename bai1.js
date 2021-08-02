function fisrtEquation(a, b) {
    if (b === 0 || (a === 0 && b === 0)) {
        return "Phương trình vô số nghiệm";
    } else if (a === 0 && b !== 0) {
        return "Phương trình vô nghiệm";
    } else {
        return "Phương trình có nghiệm = " + (-b / a);
    }
}

function result() {
    let a = parseInt(document.getElementById('inputa').value);
    let b = parseInt(document.getElementById('inputb').value);
    document.getElementById('output').innerHTML = fisrtEquation(a, b);
}