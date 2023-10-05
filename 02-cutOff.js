const cutOff = ( str, len ) => {
    let newStr = '';
    let c = 1;
    for (letter in str){
        if (letter < len){
            newStr += str[letter];
        }
        c++;
    }

    return newStr;
};

const result = cutOff('Hola, mundo', 4);
console.log( result );