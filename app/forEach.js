const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponveis  = document.getElementById('valor_total_livros_disponiveis');

function showTheBooksOnTheScreen(listOfBooks) {
    elementoComValorTotalDeLivrosDisponveis.innerHTML = ""
    elementoParaInserirLivros.innerHTML = ""
    listOfBooks.forEach(book => {
        let bookAvailable = checkAvailableBook(book);
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${bookAvailable}" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">${book.titulo}</h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `
    });
}

function checkAvailableBook(book){
    return book.quantidade > 0 ? 'livro__imagens': 'livro__imagens indisponivel';
}