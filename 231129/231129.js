function clickSecondButton()
    var modal = document.getElementById("exampleModal");
    var isShow = modal.classList.contains("show");

    if (isShow) {
        alert("モーダルが開いています");
    } else {
        alert("モーダルが閉じています");
    }
}

window.onload = function() {

};