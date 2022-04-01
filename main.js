function isEven (num) {
    return num % 2 === 0;
}

function isSimple (num) {
    if ((num === 1) || (num === 0)) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;  
    }
}

function testsNumber () {
    const testNum = +prompt("введите число");
   
    console.log(`${testNum} это ${isEven(testNum) ? "четное" : "не четное"} число.`);
    console.log(`${testNum} это ${isSimple(testNum) ? "простое" : "не простое"} число.`);
    // Результат = Вопрос ? что если да : что если нет
}