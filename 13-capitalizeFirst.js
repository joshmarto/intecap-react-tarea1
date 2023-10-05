const capitalizeFirst = ( str ) => {
    const arr = str.split(" ");
    const capitalizedArr = arr.map( word => (word[0].toUpperCase() + word.slice(1)) );
    return capitalizedArr.join().replaceAll(",", " ");
};

const result = capitalizeFirst('hola mundo esto es genial');
console.log( result );