const initials = ( str ) => {
    const arr = str.split(" ");
    const initLetters = arr.map( word => word[0].toUpperCase() );
    return initLetters.join().replaceAll(",", "");
};

const result = initials('Mario Josue Martinez Olivares');
console.log( result );