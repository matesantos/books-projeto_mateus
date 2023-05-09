const btnOrdenarPorPreco =  document.querySelector('#btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ()=>{
    const booksSort = books.sort((a, b) => a.preco - b.preco);
    showTheBooksOnTheScreen(booksSort);
});