let arrayCharacter = ['a', 'o', 'e', 'u', 'i'];
let count =0;

function vowelCharacter(characters) {
    let chars = characters.split('');
    chars.forEach(c => {
       if (arrayCharacter.indexOf(c) !== -1){
           count ++;
       }
    });
    return count === 0;
}

function checkCharacter() {
    let characters = document.getElementById('input').value;
    let x = vowelCharacter(characters);
    document.getElementById('output').innerHTML = x ? 'false' : count;
    count = 0;
}
