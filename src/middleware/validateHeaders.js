function ValidateHeaders(req, res, next) {

    const idempotencyKey = req.headers.get('Idempotency-Key');
    if(!idempotencyKey || idempotencyKey.trim().length === 0) {
        return res.status(400).json({error: 'Idempotency-Key header is required'})
       
    }

    if(idempotencyKey.length>255){
        return res.status(400).json({error:'Idempotency-Key must be 255 characters or fewer'})
    }

    req.idempotencyKey = idempotencyKey;
    next()
}

module.exports = ValidateHeaders
