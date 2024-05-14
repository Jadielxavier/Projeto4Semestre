async function getData(){
  let container = document.getElementById("Card");
  // let lista = document.getElementById("list");
  let research = document.querySelector('#research').value;

  // lista.innerHTML = '';
  container.innerHTML ='';

  //Usando Fetch e tratando seus dados
  let response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${research}
  +&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks,previewLink)`);
  let data = await response.json();
  console.log(data);
   
  for(let i = 0; i < data.items.length; i++)
  { 
      let listitem =`<li> <a href=""><p>${data.items[i].volumeInfo.title}</p></a><li/>`;

      let card =`<div>`;
      card += `<div class="grid-item">`;
      card += `<img src="${data.items[i].volumeInfo.imageLinks.thumbnail} " class="card-image">`;
      card += `<div class="card-content">`
      card += `<p> Título: ${data.items[i].volumeInfo.title} </p>`;
      card += `<p> Autor: ${data.items[i].volumeInfo.authors} </p>`;
      card += `<p> Editora: ${data.items[i].volumeInfo.publisher} </p>`;
      card += `<p>Data De Publicação: ${data.items[i].volumeInfo.publishedDate}</p>`;
      card += `<p>Mais informações:<a href=" ${data.items[i].volumeInfo.previewLink}"> Clique aqui!</a> `;
      card += "</div></div></div>"
      container.innerHTML += card;
      // lista.innerHTML += listitem;
  }
}

// Adiciona um evento de teclado ao campo de pesquisa
document.querySelector('#research').addEventListener('keypress', function(event) {
  // Verifica se a tecla pressionada é a tecla "Enter"
  if (event.key === 'Enter') {
      // Chama a função getData() para iniciar a busca
      getData();
  }
});
