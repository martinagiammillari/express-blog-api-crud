import postsArray from "../postsArray.js"


// Index
function index(req, res) {
    const risposta = {
        count: postsArray.length,
        results: postsArray
    }
    res.json(risposta)
}


//  Show
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = postsArray.find(post => post.id === id);
    if (post !== undefined) {
        res.json(post);
    } else {
        res.status(404);
        res.json({
            error: "Error 404",
            message: "Not found post"
        });
    }

}




//  Create
function create(req, res) {
    res.send("creo nuovo post")
}




//  Update
function update(req, res) {
    const id = req.params.id;
    res.send("aggiorna post n." + id)
}




//  Modify 
function modify(req, res) {
    const id = req.params.id;
    res.send("aggiorna parzialemte post n." + id)
}




//  Destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const index = postsArray.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Error 404",
            message: "Not found post"
        });
    }
    postsArray.splice(index, 1);
    console.log(postsArray);

    res.status(204);
}


   




const controller = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};

export default controller;