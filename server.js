/**
 * Created by KernalShell on 19/06/2017.
 */
const  express = require("express");

const app = express();

app.use('/',express.static("static/"));

app.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
})


