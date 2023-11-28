let answer = document.querySelector('#answer');
let outputHtml = '<ul>';

for (let tweet of tweets) {
    outputHtml += `<li><img src="${tweet.avatar}" width="50" height="50" alt="${tweet.name}のプロフィール画像"></img><a>${tweet.name}</a>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
}

outputHtml += '</ul>';
answer.innerHTML = outputHtml;
