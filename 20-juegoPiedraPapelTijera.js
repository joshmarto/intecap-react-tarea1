const juegoPiedraPapelTijera = ( option1, option2 ) => {
    option1 = option1.trim().toLowerCase;
    option2 = option.trim().toLowerCase();
    if (option1 == 'piedra'){
        switch (option2){
            case 'piedra':
                return "Empate";
                break;
            case 'papel':
                return "Ganador: Papel come a Piedra";
                break;
            case 'tijera':
                return 'Ganador: Piedra rompe tijera';
                break;
            default:
                return 'Juego invalido';
                break;
        }
    } else if (option1 == 'papel'){
        switch (option2){
            case 'piedra':
                return "Ganador: papel cubre piedra";
                break;
            case 'papel':
                return "Empate";
                break;
            case 'tijera':
                return 'Ganador: Tijera corta papel';
                break;
            default:
                return 'Juego invalido';
                break;
        }
    } else if (option1 == 'tijera'){
        switch (option2){
            case 'piedra':
                return 'Ganador: Piedra rompe tijera';
                break;
            case 'papel':
                return "Ganador: Tijera corta papel";
                break;
            case 'tijera':
                return "Empate";
                break;
            default:
                return 'Juego invalido';
                break;
        }
    } else{
        return 'Juego invalido';
    }
};

const resultado = juegoPiedraPapelTijera('piedra', 'papel');
console.log( resultado );