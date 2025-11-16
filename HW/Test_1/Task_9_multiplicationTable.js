function printMultiplicationTable(n = 5) {
    const table = [];
    let totalSum = 0;

    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
            const value = i * j;
            row.push(value);
            totalSum += value;
        }
        table.push(row);
    }

   
    const header = [" x   ", ...Array.from({ length: n }, (_, i) => i + 1)];
    console.log("-".repeat(6 * n));

    console.log(
        header
            .map(num => String(num).padStart(4, " "))
            .join(" ")
    );

    console.log("-".repeat(6 * n));

    const sumOfRow = [];

    for (let i = 0; i < n; i++) {
        const row = table[i];
        const sumRow = row.reduce((a, b) => a + b, 0);
        sumOfRow.push(sumRow);

        const formattedRow =
            String(i + 1).padStart(3, " ") + " | " +
            row.map(num => String(num).padStart(4, " ")).join(" ");

        console.log(formattedRow);
    }

    console.log("-".repeat(6 * n));

    const colSums = [];

    for (let col = 0; col < n; col++) {
        let sum = 0;
        for (let row = 0; row < n; row++) {
            sum += table[row][col];
        }
        colSums.push(sum);
    }

    console.log(
        "Сумма колонок:" +
        colSums.map(num => String(num).padStart(4, " ")).join(" ")
    );
    console.log(
        "Сумма строк:  " +
        sumOfRow.map(num => String(num).padStart(4, " ")).join(" ")
    );

    console.log(`Общая сумма всех значений: ${totalSum}`);
}

printMultiplicationTable(10);