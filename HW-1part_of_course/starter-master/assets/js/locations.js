window.onload = function() {
    var content = document.getElementById('content');
    //var links = document.getElementsByTagName('a');
    var links = document.getElementsByClassName('links');
    if(window.location.hash){
        loadHtml(window.location.hash.replace('#',""), content);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event){
            event.preventDefault();
            var path = this.getAttribute('href');
            loadHtml(path, content);
        }, true);        
    }


    var fd = new FormData();
    var file = document.getElementById('file');

    file.onchange = function(event){
        var file = event.target.files;
        fd.append('key','value');
        console.log(fd);
    }
}

function loadHtml(path, content) {
    var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if ( this.readyState == 4 ) {
                var html = this.response;
                content.innerHTML = html;
                window.location.hash = path;
            }
        }

        xhr.open('GET', path, true);
        xhr.send();
}
