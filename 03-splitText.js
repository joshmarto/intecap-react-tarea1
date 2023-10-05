const splitText = ( str, separator ) => {
    return str.split(separator);
};

const result = splitText('Hola que tal estas', ' ');
console.log( result );