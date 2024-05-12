
const person = {

    Name : "Alex",
    Age : 28

}

function printInfo() {

    console.log(`Name: ${this.Name}, Age: ${this.Age}`)

}

PrintPerson.call(person)
