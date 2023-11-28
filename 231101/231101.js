function sum() {
    var sum = 0;
    var i = 0;
    while (i < 10001) {
        sum += i;
        i++;
    }
    return sum;
}

function next50000() {
    var sum = 0;
    var i = 0;
    while (sum <= 50000) {
        sum += i;
        i++;
    }
    return i;
}

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log("0から10000までの総和は", sum(), "です。");
console.log("合計値が50000を超えた時の値は", next50000(), "です。");
fizzbuzz();
