function doFetch(){
    fetch("https://morimorihoge.github.io/teu2023f/tweets.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let answerHtml = "<ul>";
            json.forEach(function(tweet){
                answerHtml += `<li><img src="${tweet.avatar}" width="50" height="50" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
            });
            answerHtml += "</ul>";
            document.querySelector('#answer').innerHTML = answerHtml;
        });
}

document.addEventListener("DOMContentLoaded", doFetch);

function saburonBotButton(){
    let answerHtml = "<ul>";
    json.filter(function(tweet){
        return tweet.name === "三郎bot";
    }).sort().forEach(function(tweet){
        answerHtml += `<li><img src="${tweet.avatar}" width="50" height="50" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
    });
    answerHtml += "</ul>";
    document.querySelector('#answer').innerHTML = answerHtml;
}

function jiroButton(){
    let answerHtml = "<ul>";
    json.filter(function(tweet){
        return tweet.name === "次郎";
    }).sort().forEach(function(tweet){
        answerHtml += `<li><img src="${tweet.avatar}" width="50" height="50" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
    });
    answerHtml += "</ul>";
    document.querySelector('#answer').innerHTML = answerHtml;
}

function taroButton(){
    let answerHtml = "<ul>";
    json.filter(function(tweet){
        return tweet.name === "太郎";
    }).sort().forEach(function(tweet){
        answerHtml += `<li><img src="${tweet.avatar}" width="50" height="50" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
    });
    answerHtml += "</ul>";
    document.querySelector('#answer').innerHTML = answerHtml;
}
