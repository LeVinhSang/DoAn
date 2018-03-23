module.exports = (req, res, next) => {
    if(!req.body.date_return) {
        req.body.date_return=0;
    }
    next();
};