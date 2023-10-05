const noteScale = ( n ) => {
    if (n < 6){
        return 'Pésimo';
    } else if (n < 8){
        return 'Regular';
    } else if (n <= 9){
        return 'Bueno';
    } else if (n == 10){
        return 'Excelente';
    } else{
        return 'Fuera de la escala';
    }
};

const result = noteScale(7);
console.log( result );