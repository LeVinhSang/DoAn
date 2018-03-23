$(document).ready( () => {
    $.get('/borrowers').then(renderBorrower);

    function renderBorrower(borrowers) {
        let template = $('#borrowerTemplate').html();
        let resultsHTML = borrowers.map( (borrower) => {
            return template.replace(':bookImages:', borrower.book.images)
                .replace(':borrowerStudent_code:', borrower.student_code)
                .replace(':borrowerStudent_name:', 'Name: '+ borrower.student_name)
                .replace(':borrowerPhone:','Phone: '+ borrower.phone)
                .replace(':bookTitle:','Name Book: '+ borrower.book.title)
                .replace(':borrowDate:','Date Borrow: '+ borrower.date_borrow)
                .replace(':ReturnDate:','Date Return: '+ borrower.date_return)
                .replace(':name::id',"borrower/"+ borrower.id)
        }).join('');
        $('#list-borrower').html(resultsHTML);
    }

    $('#click-search-basic').click( () => {
        $.get('/api/borrower/search-basic', {
            keyword: $('#input_search').val()
        }).then(renderBorrower)
    });

    $('#search-books').click( () => {
        $.get('/books').then(renderBook);
    });

    function renderBook(books) {
        let template = $('#borrowerTemplate').html();
        let resultsHTML = books.map( (book) => {
            return template.replace(':bookImages:', book.images)
                .replace(':borrowerStudent_name:', 'Title: '+ book.title)
                .replace(':borrowerStudent_code:', '')
                .replace(':borrowerPhone:','Author: '+ book.author)
                .replace(':bookTitle:','Amount: '+ book.amount)
                .replace(':borrowDate:','Genre: '+ book.genre)
                .replace(':ReturnDate:','')
                .replace(':name::id','')
        }).join('');
        $('#list-borrower').html(resultsHTML);
    }

    function renderBookOfBorrow_books(books) {
        let template = $('#bookTemplate').html();
        let resultsHTML = books.map( (book) => {
            return template.replace(':book.id:', book.id)
                .replace(':book.title:', book.title)
        }).join('');
        $('#list-book').html(resultsHTML);
    }

    $.get('/books').then(renderBookOfBorrow_books);


});