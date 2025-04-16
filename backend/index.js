const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())

// connect server with mongodb
const connection = mongoose.connect("mongodb+srv://us:123@blogportfolio.kor6eeo.mongodb.net/blog?retryWrites=true&w=majority&appName=blogPortfolio")
connection.then(function () {
    console.log("DB Connected Successfully")
}).catch(
    function () {
        console.log("DB not Connected")
    }
)

// schema creation
// const blogSchema = new mongoose.Schema(
//     {
//         title: String,
//         content: String
//     }
// )

// // model creation
// const Blog = mongoose.model('Blog', blogSchema)

const Blog = mongoose.model("blog", {
    title: String,
    content: String
}, "blog")

Blog.find().then(function (data) {
    console.log("Blog model find() works perfectly",data)
}).catch(function () {
    console.log("Blog model find() doesn't works")
})

// 
app.get('api/dbdata', async function (req, res) {
    const blogs = await Blog.find({})
    res.send("this route is word correctly")
    console.log("Data sent to frontend")
})

// api for get the data from database and store user data from frontend
app.post('/api/blog', async function (req, res) {
    var title = req.body.title
    var blog = req.body.blog

    try {
        // fetch data from DB
        const blogs = await Blog.find({})
        console.log("Data from DB retrieved sucessfully", blogs)
        res.send(blogs)
    }
    catch (err) {
        console.log(" Error on retrieving data from DB")
    }
})


// app.patch('api/blogs/like/id', async (req, res) => {
//     try {
//         const blog = await Blog.findById(req.params.id)
//         if (!blog) {
//             return res.status(404).json({ message: "Blog not found" })
//         }

//         // Increments the likes of the blog post
//         const updateedBlog = await Blog.findByIdAndUpdate(
//             req.params.id,
//             { $inc: { likes: 1 } },
//             { new: true }
//         )
//         res.json(updateedBlog)
//     } catch (err) {
//         res.status(500).json({ message: err })
//     }
// })

// app.post('/api/blogs', async (req, res)=>{
//     const blog = new Blog({
//         newTitle: req.body.newTitle,
//         newContent: req.body.newContent,
//         likes: req.body.likes
//     })
// })

// connect to server

app.listen(7000, function () {
    console.log("Running port 7000")
})