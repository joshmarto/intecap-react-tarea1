let counter = 0;

const timerMessage = ( message, time, repetitions ) => {
    const i = setInterval(() => {
        console.log( message );
        counter++;

        if (counter == repetitions) clearInterval(i);
    }, time);
};

timerMessage( 'Hola mundo', 3000, 5 );