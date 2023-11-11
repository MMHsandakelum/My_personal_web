import express from "express";

const port = 3000;
const app = express();



app.get("/", (req, res) => {
    res.render("index.ejs");
})
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`server runining in port: ${port}`);
});
