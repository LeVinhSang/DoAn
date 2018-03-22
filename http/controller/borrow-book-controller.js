class BorrowerController {

    createBorrower(req, res, next) {
        let repo = req.app.get('borrowers.repo');
        repo.add(req.borrower).then( () => {
            res.send({message: 'success'});
        }).catch( err => next(err));
    }

    removeBorrower(req, res, next) {
        let repo = req.app.get('borrowers.repo');
        repo.remove(req.params.id).then( () => {
            res.json({message:'Success'});
        }).catch( err => next(err));
    }

    editBorrower(req, res) {
        let repo = req.app.get('borrowers.repo');
        repo.edit(req.borrower).then(function () {
            res.json({message:'Success'});
        });
    }

    search(req, res, next) {
        req.app.get('borrower.searcher').search(req.condition)
            .then( books => res.json(books))
            .catch(next)
    }


}

module.exports = BorrowerController;
