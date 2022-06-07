const authorize = (req, res, next) => {
    console.log(req.query);
    const { userID } = req.query;
    if (userID == 'abhyu') {
        next();
    } else return res.status(401).send('UnAuthorized');

};

module.exports = authorize;