const binary = ( decimal ) => {
    if ( typeof decimal != 'number' ) return;
    return decimal.toString(2);
};

const result = binary(1000);
console.log( result );