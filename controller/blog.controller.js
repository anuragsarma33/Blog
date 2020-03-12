const Blog = require('../model/blog.model');
const date = new Date().getFullYear();
module.exports = {
    index: async (req, res) => {
        try {
            const posts = await Blog.find();
            res.render('index', {
                pageTitle: 'Home',
                results: posts,
                date: date
            });
        } catch (error) {
            res.status(400).send('Unable to find any posts');
        }
    },
    create: async (req, res) => {
        res.render('create', {
            pageTitle: 'Create a new Post',
            date: date
        })
    },
    viewPost: async (req, res) => {
        const posts = new Blog(req.body);
        try {
            const data = await posts.save();
            res.redirect('/');
        } catch (error) {
            res.status(400).send('Unable to save');
        }
    },
    editPost: async (req, res) => {
        const _id = req.params.id;
        try {
            const post = await Blog.findById(_id);
            res.render('update', {
                pageTitle: 'Edit a Post',
                result: post,
                date: date
            })
        } catch (error) {
            res.status(400).send('Unable to fetch the update route');
        }
    },
    updatePost: async (req, res) => {
        const _id = req.params.id;
        try {
            const post = await Blog.findByIdAndUpdate(_id, req.body, {
                new: true,
                runValidators: true
            });
            res.redirect('/');
        } catch (error) {
            res.status(400).send('Unable to update.Try again!!!');
        }
    },
    deletePost: async (req, res) => {
        const _id = req.params.id;
        try {
            const post = await Blog.findByIdAndDelete(_id);
            res.redirect('/');
        } catch (error) {
            res.status(400).send('Unable to delete.Try again!!!');
        }

    }
}