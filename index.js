// Code your solutions in this file
const writeCards = names => {
    const array = [];

    for(let name of names){
        array.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }

    return array;
}

const countDown = num => {
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}