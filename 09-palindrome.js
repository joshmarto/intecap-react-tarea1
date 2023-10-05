const palindrome = ( str ) => {
    str = str.trim();
    if ( str == str.split("").reverse().join("") ){
        return true;
    } else{
        return false;
    }
};

const result = palindrome('salas');
console.log( result );