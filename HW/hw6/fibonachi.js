// записать в массив ряд фибоначчи начиная с N члена с длинной массива M
  

function fibonachi(n, m) {
    let fib1 = 0;
    let fib2 = 1;
    let arrFib = [fib1, fib2];

    for (let i = 0; i < n + m - 3; i++) {
        let nextFib = fib1 + fib2;
        arrFib.push(nextFib);
        fib1 = fib2;
        fib2 = nextFib;
    }

    console.log(`Последовательность чисел ряда фибоначчи начиная с ${n} члена и длинной массива ${m}`);
    console.log(arrFib.slice(n-1));
};

fibonachi(4, 10);
fibonachi(6, 4);


