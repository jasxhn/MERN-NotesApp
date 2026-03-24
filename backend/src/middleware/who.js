const who = async (req, res, next) => {
    console.log(`req method is ${req.method} && req url is ${req.url}`);
    next();
}

export default who