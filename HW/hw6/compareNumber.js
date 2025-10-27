console.log("Task 4");

function compareNumber (a, b) {
    const arr1 = Array.from(String(a));
    const arr2 = Array.from(String(b));
    let countSimplePositionAndValue = 0;
    let countSimpleValue = 0;

    for(let i = 0; i < 4; i++ ){
        if(arr1[i] === arr2[i]){
            countSimplePositionAndValue++;
        };
    };

    for(let i = 0; i < 4; i++ ){
        for(let j = 0; j < 4; j++){
            if(arr1[i] === arr2[j]){
                countSimpleValue++;
            };
        };
    };

    console.log(`Совпадают по значению и позиции: ${countSimplePositionAndValue}, а так же совпадают только по значению, но не по позиции: ${countSimpleValue}`);

};

compareNumber(3487, 3794);
compareNumber(4567, 9057);