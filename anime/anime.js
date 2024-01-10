function clickSquare() {
    // アニメーションを作成
    const animation = anime({
        targets: square,
        rotate: [0, 360],
        duration: 1000,
        easing: "easeInOutQuad",
    });

    // アニメーションを開始
    animation.play();

    // アニメーションが完了するまで、要素を無効にする
    square.disabled = true;

    // アニメーションが完了したら、要素を有効にする
    animation.onEnd(() => {
        square.disabled = false;
    });
}

