
function doCheckAnswers() {
        // テキストボックスの値を取得
    let inputValue = document.getElementById("input_string").value;

        // HTMLのli要素を配列に格納
    let liElements = document.querySelectorAll("answer-list");

        // テキストボックスの値がli要素のいずれかに一致するかチェック
    let match = liElements.find(element => element.textContent === inputValue);

        // 結果を表示
        if (match) {
        document.getElementById("answer").textContent = "正解";
    } else {
        document.getElementById("answer").textContent = "不正解";
    }
    }
