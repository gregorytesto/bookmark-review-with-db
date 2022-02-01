const db = require("../db/dbConfig.js");

const getAllBookmarks = async()=>{
    try{
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks;
    } catch(err){
        return err;
    }
}

const getBookmark = async(id)=>{
    try{
        const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
        return oneBookmark;
    } catch(err){
        return err;
    }
}

const createBookmark = async (bookmark)=>{
    try{
        const newBookmark = await db.one(
            "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
            [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite]
        )
        return newBookmark;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllBookmarks,
    getBookmark,
    createBookmark
};