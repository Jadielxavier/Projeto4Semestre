// fetch(`https://viacep.com.br/ws/06660740/json/`).then(r=>{
//     return r.json()
// }).then(corpo =>{
//     document.getElementById("span").innerHTML=corpo.cep
// })


//Função para pesquisar por nome//
function consultarLivro(){
    let research = document.querySelector('#research').value;


    let url = `https://books.googleapis.com/books/v1/volumes?q=${research}+&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks)`;


    //Retornando dados em json
      fetch(url).then(function(response){
       response.json().then(function(dado){
       console.log(dado);
       debugger;

       for(let i = 0; i < dado.items.length; i++){
          let container = document.getElementById("Card");
          let card = `<p class="card-text">Título: ${dado.items[i].volumeInfo.title}</p><br/>`;
          card += `<p>Autor: ${dado.items[i].volumeInfo.authors}</p><br/>`;
          container.innerHTML += card;
        }
    })

  });
  }
  
//    function mostrarlivros(obj) {
//    let resultado = document.querySelector('#resultado');
//    resultado.innerHTML = `<p>Titulo: ${obj.title}</p>`;

// }