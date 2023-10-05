const addNumbers = ( nArr ) => {
    let total = 0;
    total = nArr.map( n => total += n ).pop();
    return total;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = addNumbers( numbers );
console.log( result );