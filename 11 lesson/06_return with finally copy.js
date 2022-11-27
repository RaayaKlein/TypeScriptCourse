// try is kept somewhere else, while finally is running. 
// try will not change, according to what happens in finally.
const getData = () => {
    let num = 1;
    console.log(`Start getData(). num = ${num}`); // num = 1

    try {
        return `In try. num = ${num}`;
    } catch (error) {
        return `In catch. num = ${num}`;
    } finally{
        num++;
        console.log( `In finally. num = ${num}`);
    }
}

console.log(getData());