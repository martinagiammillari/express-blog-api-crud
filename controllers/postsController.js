import postsArray from "../postsArray.js"


// Index
function index(req, res) {
    res.send("lista dei post");
}


//  Show
function show(req, res) {
    const id = parseInt(req.params.id);
    const resp = postsArray.find(post => post.id === id);
    res.json({
        post: resp,
        message: "Dettagli di un singolo post"
    });
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
function modify (req,res){
 const id = req.params.id;
    res.send("aggiorna parzialemte post n." + id)
}




//  Destroy
function destroy (req,res){
 const id = req.params.id;
    res.send("cancella post n." + id)
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