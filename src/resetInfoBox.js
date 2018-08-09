export const resetInfoBox = () => {
//reseting information div
    document.querySelector('#results').removeAttribute("href");
    document.querySelector('#results').removeAttribute("alt");
    document.querySelector('#results').innerHTML = '';
    document.querySelector('#short-article').innerHTML = '';
    document.getElementById('address').innerHTML = '';
    document.getElementById('info').innerHTML = '';
}