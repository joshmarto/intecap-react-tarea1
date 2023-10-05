const getAge = ( bornDate ) => {
    const now = new Date();

    const subYears = now.getFullYear() - bornDate.getFullYear();
    const subMonths = now.getMonth() - bornDate.getMonth();
    const subDays = now.getDate() - bornDate.getDate();
    const years = (subMonths < 0) ? (subDays < 0) ?  subYears - 1 : subYears : subYears;

    const age = `${years} años`;
    return age;
};

const date = new Date(1988, 9, 1);
const result = getAge( date );
console.log( result );