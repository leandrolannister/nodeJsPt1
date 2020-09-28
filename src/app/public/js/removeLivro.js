let tabLivros = document.querySelector('#livros');

tabLivros.addEventListener('click', function(event){
    let elementClick = event.target;

    if(elementClick.dataset.type == 'remocao'){
        let livroId = elementClick.dataset.ref;
        fetch(`http://localhost:3000/livros/${livroId}`, 
          { method: 'DELETE' })
          .then(resp => {
            let tr = elementClick.closest(`#livro_${livroId}`);
            tr.remove();
          })
          .catch(erro => console.log(erro))        
    }
});