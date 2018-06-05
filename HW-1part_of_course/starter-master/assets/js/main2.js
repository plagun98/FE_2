// window.onload = function(){
//     var XHR = new XMLHttpRequest();

//     XHR.onreadystatechange = function(){
//         if(this.readyState == 4){
//             var div = document.getElementById('html');
//             var posts = JSON.parse(this.response);
            
//             posts.forEach(function(post){
//                 var postWrap = document.createElement('div');
//                 var title =  document.createElement('h3');
//                 var description = document.createElement('p');
//                 title.innerText = post.title;
//                 description.innerText = post.body;
//                 postWrap.appendChild(title);
//                 postWrap.appendChild(description);

//                 div.appendChild(postWrap);
//             });
//             // var indexHtml = this.response;
//             // var div = document.getElementById('html');
//             //     div.innerHTML = indexHtml;

//             var counter = 0;
//             while (counter < posts.length){
//                 var postWrap = document.createElement('div');
//                 var title =  document.createElement('h3');
//                 var description = document.createElement('p');
//                 title.innerText = posts[counter].title;
//                 description.innerText = post.body;
//                 postWrap.appendChild(title);
//                 postWrap.appendChild(description);

//                 div.appendChild(postWrap);
//                 counter++;
//             }

//         }
//     }

    

//     // XHR.open('GET','/',true);
//     // XHR.setRequestHeader('TEST', 'test');
//     // XHR.send();

//     XHR.open('GET','https://jsonplaceholder.typicode.com/posts/',true);
//     XHR.setRequestHeader('TEST', 'test');
//     XHR.send();


// }
