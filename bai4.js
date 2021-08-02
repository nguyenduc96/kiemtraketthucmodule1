class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return "Tên là : " + this.name + " cân nặng = " + this.weight + "kg";
    }
}

let objAnimal1 = new Animal('Elphant', 45.6);
let objAnimal2 = new Animal('Đức', 50);

console.log(objAnimal1);
objAnimal1.toString();
console.log(objAnimal1.toString());
objAnimal2.setName('Mouse');
console.log(objAnimal2);