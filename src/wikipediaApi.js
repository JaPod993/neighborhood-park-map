export const getInfo = (search) => {

    /* getting markers info from wikiedia API */
    fetch("https://pl.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=1",
        {
            headers: {'Accept': 'application/json'},
        }).then(response => response.json()).then(addInfo).catch(e => requestError(e));
    };

    const addInfo = (data) => {
    const link = data[3][0];
    const art = data[2][0];
    if (link || art) {
        document.querySelector('#short-article').innerHTML = '<em>' + art + '</em><br/>';
        document.querySelector('#results').setAttribute("href", link);
        document.querySelector('#results').setAttribute("alt", link);
        document.querySelector('#results').innerHTML = 'See in Wikipedia';
    }
    else {
        document.querySelector('#info').innerHTML = 'Info was returned for this data.'
    }
};
/* error handling */
const requestError =(e) => {
    let infoBox = document.getElementById('info-box');
    infoBox.setAttribute('class', 'show');
    setTimeout(function(){ infoBox.setAttribute('class', 'hide') }, 3000);
};
