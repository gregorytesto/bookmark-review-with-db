const express = require("express");
const bookmarks = express.Router();
const { getAllBookmarks, getBookmark, createBookmark } = require("../queries/bookmarks.js");
const { checkName, checkFavorite } = require("../validations/checkBookmarks.js")

bookmarks.get("/", async (req, res)=>{
    try{
        const allBookmarks = await getAllBookmarks();
        if(allBookmarks[0]){
            res.status(200).json(allBookmarks);
        } else {
            res.status(500).json({ error: "server error" });
        }    
    } catch(err){
        console.log(err);
    }
})

bookmarks.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const bookmark = await getBookmark(id);
        if(bookmark.id){
            res.status(200).json(bookmark);
        } else {
            res.status(500).json({error: "Bookmark not found"});
        }
    }catch(err){
        console.log(err);
    }
})

bookmarks.post("/", checkName, checkFavorite,  async (req, res)=>{
    const { body } = req;

    // const { name, url, is_favorite, category } = req.body;
    // if(!name || !url)
    try{
        const createdBookmark = await createBookmark(body);
        if(createdBookmark.id){
            res.status(200).json(createdBookmark);
        } else {
            res.status(500).json({error: "Bookmark creation error"});
        }
    } catch(err){
        console.log(err);
    }
})


module.exports = bookmarks;