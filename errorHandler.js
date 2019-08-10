const errorHandler = (req, res, next, error) => {

    return res.send(200).json({
        success : false,
        message :  error.message
    })
}

module.exports = errorHandler;