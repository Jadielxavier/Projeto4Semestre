
function consultarLivro(){

  let container = document.getElementById("Card");
  let lista = document.getElementById("list");
  lista.innerHTML = '';
  container.innerHTML ='';

  let research = document.querySelector('#research').value;

  let url = `https://books.googleapis.com/books/v1/volumes?q=${research}
  +&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks,previewLink)`;

  
    //Retornando dados em json
      fetch(url).then(function(response){
       response.json().then(function(dado){
       console.log(dado);
       debugger;

       for(let i = 0; i < dado.items.length; i++)
       { 

          let listitem =`<li> <a href=""><p>${dado.items[i].volumeInfo.title}</p></a><li/>`;

          let card =`<div>`;
          card += `<div class="grid-item">`;
          card += `<img src="${dado.items[i].volumeInfo.imageLinks.thumbnail} " class="card-image">`;
          card += `<div class="card-content">`
          card += `<p> Título: ${dado.items[i].volumeInfo.title} </p>`;
          card += `<p> Autor: ${dado.items[i].volumeInfo.authors} </p>`;
          card += `<p> Editora: ${dado.items[i].volumeInfo.publisher} </p>`;
          card += `<p>Data De Publicação: ${dado.items[i].volumeInfo.publishedDate}</p>`;
          card += `<p>Link Book:<a href=" ${dado.items[i].volumeInfo.previewLink}"> Link/a>`;
          card += "</div></div></div>"
          container.innerHTML += card;
          lista.innerHTML += listitem;
        }
    })

  });
  
  }