const primos = ( limit ) => {
    const c = [];
    for (let x = 1; x <= limit; x++){
        let divs = 0;
        for (let i = 1; i <= x; i++){
            if (x % i == 0){
                divs += 1;
            }
        }
        if (divs == 2) c.push(x);
    }
    return c.join(" ");
};

const result = primos(1000);
console.log( result );