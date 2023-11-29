function outputTweets(tweets) {
    let outputHtml = '<ul>';
    for (let tweet of tweets) {
        outputHtml +=
            `<ul class="list-group">
              <li class="list-group-item">
              <img src="${tweet.avatar}" width="60" height="70" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i>
              </li>
             </ul>`;
    }
    outputHtml += '</ul>';
    answer.innerHTML = outputHtml;
}

window.onload = function() {
    outputTweets(tweets);
};

function allButton() {
    outputTweets(tweets);
}

function saburonBotButton() {
    outputTweets(tweets.filter(tweet => tweet.name === "三郎BOT"));
}

function jiroButton() {
    outputTweets(tweets.filter(tweet => tweet.name === "次郎"));
}

function taroButton() {
    outputTweets(tweets.filter(tweet => tweet.name === "太郎"));
}



