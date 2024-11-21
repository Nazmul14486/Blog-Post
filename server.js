import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Array to store blogs
let blogs = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // Pass the blogs array to home.ejs
    res.render("home.ejs", { blogs: blogs });
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.post("/submit", (req, res) => {
    // Get form values
    var writer = req.body['writer-name'];
    var title = req.body['title-name'];
    var content = req.body['content-name'];

    // Add the new blog to the array
    blogs.push({ writer: writer, title: title, content: content });

    // Redirect to home page after submission
    res.redirect("/");
});

app.listen(port, () => {
    console.log('listening on port', port);
});
