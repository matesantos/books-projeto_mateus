import { showTheBooksOnTheScreen } from './forEach.js'
import { aplicarDesconto } from './map.js'
let books = [];
const endPontApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


const getSearchBooksFromAPI = async () => {
    try{
        const res = await fetch(endPontApi);
        books = await res.json();
        let livrosComDesconto = aplicarDesconto(books);
        showTheBooksOnTheScreen(livrosComDesconto);
    }catch(error){
        console.log(error);
    }
}

getSearchBooksFromAPI();