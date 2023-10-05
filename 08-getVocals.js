const getVocals = ( str ) => {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let countVocals = 0;
    for (const i in str) {
        countVocals += (vocals.includes(str[i])) ? 1 : 0 ;
    }
    return countVocals;
};

const result = getVocals('Hola mundo');
console.log(result);