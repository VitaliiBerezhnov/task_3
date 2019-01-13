requirejs(["scripts/showData"], function(showData) {

    var cards = document.getElementById('cards');

    (function (){

        var xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'https://www.reddit.com/r/frontend.json', true);
    
        xhr.onreadystatechange = function() {

            if (xhr.readyState === 3) {
                var load = document.getElementById('load').style.display = "block";
            } else {
                load = document.getElementById('load').style.display = "none";
            }
            if (xhr.readyState !=4) return;
    
            var data = JSON.parse(xhr.responseText);
            showData(data, cards);
        };
        
        xhr.send();     
    }());
});
