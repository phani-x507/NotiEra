export function errorHandler(err, req, res, next) {

    if (err.status) {
        res.status(err.status).json({ msg: err.message });
    } else {
        res.status(500).json({ msg: err.message });
    }

}

export function errors(req,res,next){
    const error = new Error('not Found');
    error.status = 404;
    res.send({msg:'The Page is Not Found'});
    next(error);
}
