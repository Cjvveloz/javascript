function noParesDeContarImparesHasta(x = 4) {
    let count = 0;

    for (let i = 0; i <= x; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }

    return console.log(count);
}



