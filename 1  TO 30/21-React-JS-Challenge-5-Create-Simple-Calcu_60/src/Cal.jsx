

const Cal = (a,b) => {
    let sum = a+b;
    return sum;
 
}

const sub = (a,b) => {
    let sub = a-b;
    return sub;
 
}

const mult = (a,b) => {
    let mult = a*b;
    return mult;
 
}

const div = (a,b) => {
    let sum = a/b;
    sum = sum.toPrecision(3);
    return sum;
 
}

export default Cal;
export {sub,mult,div};