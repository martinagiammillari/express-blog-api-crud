
import express from "express";
import postsArray from "../postsArray.js"


const router= express.Router();


// Index
router.get("/", (req, res)=>{
    res.send ("lista dei post")
})


//  Show
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const resp = postsArray.find(post => post.id===id);
    res.json({
  post: resp,
  message: "Dettagli di un singolo post"
});
})



//  Create
router.post("/", (req,res)=>{
    res.send("creo nuovo post")
})



//  Update
router.put("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna post n."+ id)
})



//  Modify 
router.patch("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna parzialemte post n."+ id)
})



//  Delete
router.delete("/:id", (req,res)=>{
        const id =req.params.id;
        res.send("cancella post n."+ id)
})

export default router;
