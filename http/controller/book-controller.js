class BookController {

    createBook(req, res, next) {
        let repo = req.app.get('books.repo');
        repo.add(req.book).then( () => {
            res.send({message: 'success'});
        }).catch( err => next(err));
    }

    removeBook(req, res, next) {
        let repo = req.app.get('books.repo');
        repo.remove(req.params.id).then( () => {
            res.json({message:'Success'});
        }).catch( err => next(err));
    }

    editBook(req, res) {
        let repo = req.app.get('books.repo');
        repo.edit(req.book).then(function () {
            res.json({message:'Success'});
        });
    }


}

module.exports = BookController;
    