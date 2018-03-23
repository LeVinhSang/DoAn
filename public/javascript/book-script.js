$(document).ready( () => {
    $.get('/books').then(renderBook);

    function renderBook(books) {
        let template = $('#bookTemplate').html();
        let resultsHTML = books.map( (book) => {
            return template.replace(':book.images:', book.images)
                .replace(':bookTitle:', book.title)
                .replace(':author:', book.author)
                .replace(':bookAmount:', book.amount)
                .replace('-id-', book.id)
        }).join('');
        $('#book-list').html(resultsHTML);
    }
});