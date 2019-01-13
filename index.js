requirejs(["scripts/showData"], function(showData) {

    var cards = document.getElementById('cards');
    var button = document.getElementById('button');
    button.addEventListener('click', loadData);

    function loadData(){

        var xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'https://www.reddit.com/r/frontend.json', true);
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState !=4) return;
    
            var data = JSON.parse(xhr.responseText);
            showData(data, cards);
        };
        
        xhr.send();     
    };
});
