define(function(){
    return function createCard(heading, src, name){

        var card = document.createElement('DIV');
        var title = document.createElement('H4');
        var img = document.createElement('IMG');
        var autor = document.createElement('P');

        
        card.appendChild(img);
        img.src = src || './img/undefinedIMG.png';
        img.className = 'img';

        card.className = 'card';
        card.appendChild(title);
        var bookTitle = heading || 'Title';
        if(bookTitle.length > 50){
          bookTitle = bookTitle.slice(0, 50) + '...';
        }
        title.innerHTML = bookTitle;
        title.className = 'title';

        card.appendChild(autor);
        autor.innerHTML = name || 'VB';

        return card

    };
});