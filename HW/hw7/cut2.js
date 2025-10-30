function cutNumber(number, cutNum) {
    console.log(`Разделяем число ${number} на ${cutNum} части(ей) с двумя знаками после запятой.`);

    if (cutNum < 1)
        return [];
    
    if (cutNum === 1)
        return [number];
    
    const cuts = [0, 1];
    let randomSum = 0;
    
    for (let i = 0; i < cutNum - 1; i++) {
        const random = Math.random();
        
        randomSum += random;
        cuts.push(random);
    }

    cuts.map(cut => cut / randomSum * number);
    
    cuts.sort((a, b) => a - b);
        
    const parts = [];
    let partsSum = 0;
    for (let i = 1; i < cuts.length; i++) {
        let part = (cuts[i] - cuts[i - 1]) * number;
        part = parseFloat(part.toFixed(2));
        
        partsSum += part;
        parts.push(part);
    }

    const diff = number - partsSum;

    if (diff != 0)
        parts[parts.length - 1] = parseFloat((parts[parts.length - 1] + diff).toFixed(2));

    console.log(parts);

    const sumOfFinalArray = parts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`Сумма чисел массива равна: ${sumOfFinalArray}`); // почему-то иногда не правильно считает

    return parts;
}

cutNumber(15, 3);