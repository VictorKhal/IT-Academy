function rollTheDice (numOfPlayers, numOfRolls) {

    const results = [];

    for (let i = 1; i <= numOfPlayers; i++) {
        let total = 0;
        console.log(`Игрок ${i} бросает кубик:`);

        for (let j = 1; j <= numOfRolls; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        total += roll;
        }

        console.log(`  Сумма игрока ${i}: ${total}`);
        results.push({ player: i, total });
    }

    const highestTotal = Math.max(...results.map(result => result.total));
    const winners = results.filter(result => result.total === highestTotal);

    if (winners.length > 1) {
        const moreWinner = winners.map(winner => `Игроком ${winner.player}`).join(", ");
        console.log(`Ничья между: ${moreWinner}!`);
    } else {
        const winner = winners[0];
        console.log(`🏆 Победил Игрок ${winner.player} с суммой ${winner.total} очков!`);
    }

}

rollTheDice(5, 5);




