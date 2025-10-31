function cutNumberInt(number, cutNum) {
    console.log(`Разделяем число ${number} на ${cutNum} целые(х) части(ей).`);

    if (cutNum < 1) return [];

    const cuts = [];
    for (let i = 0; i < cutNum - 1; i++) {
        cuts.push(Math.floor(Math.random() * number));
    }

    cuts.sort((a, b) => a - b);
    cuts.unshift(0);
    cuts.push(number);

    const parts = [];
    for (let i = 1; i < cuts.length; i++) {
        parts.push(cuts[i] - cuts[i - 1]);
    }

    console.log(parts);
    const sumOfFinalArray = parts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`Сумма чисел массива равна: ${sumOfFinalArray}`);

    return parts;
}

cutNumberInt(15, 3);