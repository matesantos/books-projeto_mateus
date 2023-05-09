const btnFiltrarLivrosFront = document.querySelector("#btnFiltrarLivrosFront");
const btnFiltrarLivrosBack = document.querySelector("#btnFiltrarLivrosBack");
const btnFiltrarLivrosDados = document.querySelector("#btnFiltrarLivrosDados");

const btnFilter = document.querySelectorAll('.btn');

btnFilter.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const element = document.querySelector(`#${this.id}`);
    const booksFiltered =  books.filter(book => book.categoria === element.value);
    showTheBooksOnTheScreen(booksFiltered);
}
