define(function(require){
    var createCard = require('./createCard');

    return function showData(data, node) {  
    
        for(var i = 0; i < data.data.children.length; i++ ) {
            var title = data.data.children[i].data.title
            var nameAutor = data.data.children[i].data.author
            if(data.data.children[i].data.preview ) {
                var photo = data.data.children[i].data.preview.images[0].source.url;
                photo = photo.replace('amp;', '');
            } else {
                photo = undefined;
            };

            node.appendChild(createCard(title, photo, nameAutor)); 
            
        };
    };
});