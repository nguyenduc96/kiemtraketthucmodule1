let numbers = [-3, 5, 1, 3, 2, 10, 13, 4, 6, 11, 20];

function returnNumber(number, numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (number === numbers[i]) {
            return "Phần tử " + numbers[i] + " ở index " + i;
        }
    }
    return "Số này không có trong mảng";
}

function searchNumber() {
    let number = parseInt(document.getElementById('input').value);
    document.getElementById('output').innerHTML = returnNumber(number, numbers);
}
