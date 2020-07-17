let sentence ="I am a developer, please make a cup of tea for me."

function makeReverse( str ) {
    
    let container ="";

    for (let i=str.length ; i>= 0 ; i--) {

        let element = str[i];
        container=container+ element;

    }
    return container;

}

console.log ( makeReverse (sentence) );