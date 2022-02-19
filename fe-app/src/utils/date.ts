function getCurrentYearAndPlus(plusYears=2) {
    const currentYear = new Date().getFullYear();
    const year = [];
    for (let i = 0; i <= plusYears; i++) {
        year.push(currentYear + i);
    }
    return year;    
}

export default getCurrentYearAndPlus;
