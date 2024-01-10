function startAnimation(){
    let timeline = anime.timeline({
        easing: 'linear',
        duration: 200
    });
    timeline.add({
        targets: '#animation-box',
        translateX: 400
    }).add({
        targets: '#animation-box',
        translateY: 200
    }).add({
        targets: '#animation-box',
        translateX: 0
    }).add({
        targets: '#animation-box',
        translateY: 0
    })
}