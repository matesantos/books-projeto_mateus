const btnFilter = document.querySelectorAll('.btn');

btnFilter.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const element = document.querySelector(`#${this.id}`);
    const categoria = element.value;

    console.log(categoria)

    const booksFiltered = categoria === 'disponivel' ? filterAvailableBooks() : filterByCategory(element);
    showTheBooksOnTheScreen(booksFiltered);
    categoria === 'disponivel' && exibirValorTotalDosLivrosDisponiveisNaTela(booksFiltered);
}

function filterByCategory(element) {
    return books.filter(book => book.categoria === element.value);
}

function filterAvailableBooks() {
    return books.filter(book => book.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(booksFiltered){
    console.table(booksFiltered)
    const totalValue = booksFiltered.reduce((acc, book) => acc + book.preco, 0);

    elementoComValorTotalDeLivrosDisponveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue.toFixed(2)}</span></p>
        </div>
    `
}
