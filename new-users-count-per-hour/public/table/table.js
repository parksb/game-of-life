(function () {
    let http = new XMLHttpRequest();
    http.addEventListener('load', function () {
        let data = JSON.parse(http.responseText);
        console.log(data);
    });
    http.open('GET', 'user-count');
    http.send();
}());
