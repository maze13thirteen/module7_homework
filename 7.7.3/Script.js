
const Users = [
    {
        name: "Mikhail",
        age: 27
    },
    {
        name: "Valeria",
        age: 20
    },
    {
        name: "Bruce Wayne",
        age: 85

    }
];

function filterAge(Users, Age) {
    const filteredUsers = [];
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].age >= Age) {
            filteredUsers.push(Users[i]);
        }
    }
    return filteredUsers;
}

function extractNames(Users) {
    const names = [];
    for (let i = 0; i < Users.length; i++) {
        names.push(Users[i].name);
    }
    return names;
}

console.log(filterAge(Users, 18));
console.log(extractNames(Users));