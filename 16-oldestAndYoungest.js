const oldestAndYoungest = ( ages ) => {
    ages = ages.sort();
    return `La edad del mayor es ${ages.pop()} y la edad del menor es ${ages[0]}`;
};

const years = [10, 20, 30, 40, 50, 25];
const result = oldestAndYoungest( years );
console.log( result );