const validateBookmark = (req, res, next) => {
    let errorMsg = [];
    if (req.body.name === undefined) {
        errorMsg.push("name is required");
    }
    if(typeof req.body.is_favorite !== "boolean"){
        errorMsg.push("is_favorite must be a boolean");
    } 

    if(errorMsg.length > 0){
        res.status(400).json({ error: errorMsg.join(", ") });
    } else {
        next();
    }

};

module.exports = { validateBookmark };