requirejs(["scripts/showData"], function(showData) {

    var cards = document.getElementById('cards');
    var input = document.getElementById('addInp');
    var btm = document.getElementById('btm');
    var url = 'https://www.reddit.com/r/frontend.json';
    var arr = [];

    btm.addEventListener('click', loadMore)

    function loadMore(){
        var urlLoad = 'https://www.reddit.com/r/'+  input.value + '.json?'// + 'after=' + arr[0];
        subscribe(urlLoad)
    };
 
    input.onkeydown = function(e) {

        if (!(e.keyCode === 13)) return

        cards.innerHTML = '';
        subscribe('https://www.reddit.com/r/'+  input.value + '.json');       
    };

    function subscribe(url) {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);
        xhr.send();

        xhr.onreadystatechange = function() {
            
            if (xhr.readyState === 3) {
                var load = document.getElementById('load').style.display = "block";
            } else {
                load = document.getElementById('load').style.display = "none";
            }
            if (xhr.readyState !=4) return;
    
            var data = JSON.parse(xhr.responseText);
            showData(data, cards);
            
            arr[0] = data.data.after;
            
        };
      };

    subscribe(url);

});
