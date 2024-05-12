
function uniqueSort(arr) {
    return arr.sort().filter((elem, pos, arr) => {
    return arr.indexOf(elem) === pos;
    });
    }