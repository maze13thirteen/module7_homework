
function setFullName(fullName, person) { person.fullName = fullName; }
const setPersonFullName = setFullName.bind(null, "John Smith");

setPersonFullName(person);