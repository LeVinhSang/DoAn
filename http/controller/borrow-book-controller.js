class BorrowerController {

    createBorrower(req, res, next) {
        let repo = req.app.get('borrowers.repo');
        repo.add(req.borrower).then( () => {
            res.redirect('/');
        }).catch( err => next(err));
    }

    removeBorrower(req, res, next) {
        let repo = req.app.get('borrowers.repo');
        repo.remove(req.params.id).then( () => {
            res.redirect('/');
        }).catch( err => next(err));
    }

    editBorrower(req, res) {
        let repo = req.app.get('borrowers.repo');
        repo.edit(req.borrower).then(function () {
            res.redirect('/');
        });
    }

    search(req, res, next) {
        req.app.get('borrower.searcher').search(req.condition)
            .then( borrowers => res.json(borrowers))
            .catch(next)
    }

    renderEditBorrower (req, res, next) {
        let borrowersPromise = req.app.get('borrower.searcher').search(req.condition);
        let booksPromise     = req.app.get('books.provider').provideAll();
        Promise.all([borrowersPromise, booksPromise])
            .then( values => {
                res.render('edit.njk', {borrower:values[0][0], books:values[1]})
            })
            .catch(next)
    }



}

module.exports = BorrowerController;
