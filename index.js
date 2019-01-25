requirejs(["scripts/showData"], function(showData) {

    var cards = document.getElementById('cards');
    var input = document.getElementById('addInp');
    var btm = document.getElementById('btm');
    var url = 'https://www.reddit.com/r/frontend.json';
    var forUrl;

    btm.onclick = function(){
        if(input.value){
            var urlLoad = 'https://www.reddit.com/r/'+  input.value + '.json?after=' + forUrl;
        }else{
            urlLoad = 'https://www.reddit.com/r/frontend.json?after=' + forUrl;
        }
        
        subscribe(urlLoad)
    };
 
    input.onchange = function(event) {
        var result = event.target.value
        cards.innerHTML = '';
        subscribe('https://www.reddit.com/r/'+  result + '.json');
                      
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

            forUrl = data.data.after;
            
        };
      };

    subscribe(url);

});
