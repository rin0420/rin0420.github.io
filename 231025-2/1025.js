function checkAge() {
    let age = document.getElementById("age").value;

    if (age < 20) {
        document.getElementById("answer").innerHTML = "未成年";
    } else if (age >= 20 && age < 65) {
        document.getElementById("answer").innerHTML = "成人";
    } else if (age >= 65) {
        document.getElementById("answer").innerHTML = "高齢者";
    } else {
        document.getElementById("answer").innerHTML = "エラー";
    }
}
