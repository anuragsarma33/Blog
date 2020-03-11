const Blog = require('../model/blog.model');
module.exports = {
    index: (req, res) => {
        Blog.find()
            .then(results => {
                res.render('index', {
                    pageTitle: 'Blog',
                    results: results
                })
            }).catch(error => {
                res.status(404).send('404 ERROR!!!Page Not Found')
            })

    },
    create: (req, res) => {
        res.render('create', {
            pageTitle: 'Create a new Post'
        })
    },
    viewPost: (req, res) => {
        const data = new Blog(req.body);
        data.save().then((result) => {
            res.redirect('/')
        }).catch((error) => {
            res.status(404).send('Cannot create your post')
        })

    }
}