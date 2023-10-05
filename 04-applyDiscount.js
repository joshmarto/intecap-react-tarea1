const applyDiscount = ( price, discountPercentaje ) => {
    return price * (1 - (discountPercentaje/100));
};

const result = applyDiscount(1000, 20);
console.log( result );