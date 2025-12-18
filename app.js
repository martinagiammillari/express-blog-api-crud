
import express from "express";
import postsRouter from "./routers/posts.js";


const app = express ();
const port = 3600;
app.use(express.static("public"));

app.use(express.json());
app.use("/posts", postsRouter);




app.listen(port, function(){
    console.log("il server è in ascolto sula porta " +port);
})
