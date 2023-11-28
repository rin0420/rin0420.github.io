let answer = document.querySelector('#answer');
let outputHtml = '<ul>';

let i = 0;
while(i < tweets.length){
    outputHtml += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
    i++;
}

outputHtml += '</ul>';
answer.innerHTML = outputHtml;






