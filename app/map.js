const aplicarDesconto = livrosComDesconto => {
    const off = 0.3;
    return livrosComDesconto.map(book => ({ ... book, preco: (book.preco - (book.preco*off))}))
}