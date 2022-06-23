console.log("JS OK");


/*

1- scrivere il ciclo da 1 a 100
2- trovare i multipli di 3 e di 5
3- sostituire i multipli con "fizz", "buzz" e "fizzbuzz"
4-

*/





for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz")
    } else if (i % 5 == 0) {
        console.log("buzz")
    } else console.log(i);
}
