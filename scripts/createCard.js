define(function(){
    return function createCard(book, src, name){

        var card = document.createElement('DIV');
        var title = document.createElement('H4');
        var img = document.createElement('IMG');
        var autor = document.createElement('P');

        card.className = 'card';
        card.appendChild(title);
        var bookName = book !== undefined ? book : 'Title';
        title.innerHTML = bookName;
        title.className = 'title';

        card.appendChild(img);
        img.src = src !== undefined ? src : './img/undefinedIMG.png';
        img.className = 'img';

        card.appendChild(autor);
        autor.innerHTML = name !== undefined ? name : 'VB';

        return card

    };
});