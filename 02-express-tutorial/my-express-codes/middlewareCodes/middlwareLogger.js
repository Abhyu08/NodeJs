const logger = (req, res, next) => {
    const time = new Date().getTime();
    const url = req.url;
    const method = req.method;
    console.log('Exported logger : ' , time, url, method);
    next();//MUST // othewise process will stuck here!
    // return if we want to stop the cycle
};



module.exports = logger;
