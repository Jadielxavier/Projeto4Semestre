// fetch(`https://books.googleapis.com/books/v1/volumes?q=${research}+&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks,previewLink)`)
// .then(r=>{
//     return r.json()
// }).then(corpo =>{
//     document.getElementById("span").innerHTML=corpo.cep
// })


//Função para pesquisar por nome//
function consultarLivro(){
  
    let research = document.querySelector('#research').value;
    
    


    let url = `https://books.googleapis.com/books/v1/volumes?q=${research}+&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks,previewLink)`;


    //Retornando dados em json
      fetch(url).then(function(response){
       response.json().then(function(dado){
       console.log(dado);
       document.getElementById("Card").innerHTML = "";
       debugger;

       for(let i = 0; i < dado.items.length; i++){
          let container = document.getElementById("Card");
          let card = `<div id="div-card-resultado"><p class="card-text">Título: ${dado.items[i].volumeInfo.title}</p><div/>`;
          card += `<img src="${dado.items[i].volumeInfo.imageLinks.thumbnail}"<br/>`;
          card += `<p>Autor: ${dado.items[i].volumeInfo.authors}</p><br/>`;
          card += `<p>Editora: ${dado.items[i].volumeInfo.publisher}</p><br/>`;
          card += `<p>Data De Publicação: ${dado.items[i].volumeInfo.publishedDate}</p><br/>`;
          card += `<p>Link Book: <a href=" ${dado.items[i].volumeInfo.previewLink}"</p>`;
          container.innerHTML += card;
        }
    })

  });
  }
  
//    function mostrarlivros(obj) {
//    let resultado = document.querySelector('#resultado');
//    resultado.innerHTML = `<p>Titulo: ${obj.title}</p>`;

// }