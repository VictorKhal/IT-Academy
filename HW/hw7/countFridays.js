function countFridays13 (dateStart) {
    const dayNow = new Date();
    let currentDay = new Date(dateStart);
    let count = 0;
    
    while(currentDay <= dayNow) {
        if (currentDay.getDate() === 13 && currentDay.getDay() === 5) 
            count ++;
        
        currentDay.setDate(currentDay.getDate() + 1); 
    };
    console.log(`Количество пятниц 13 с ${dateStart}: ${count}`);
    return count;

    
}
countFridays13('2000-07-05'); // 44 пятницы 13
countFridays13('1990-07-05'); // 60 пятницы 13
countFridays13('1970-07-05'); // 94 пятницы 13

