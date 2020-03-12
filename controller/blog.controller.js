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

    },
    editPost: (req, res) => {
        const _id = req.params.id;
        Blog.findById(_id).then(result => {
            res.render('update', {
                pageTitle: 'Update',
                result: result
            })
        }).catch(err => {
            res.status(404).send("Error")
        })

    },
    updatePost: (req, res) => {
        const _id = req.params.id;
        Blog.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        }).then(post => {
            if (!post) {
                res.status(404).send('Unable to find post')
            }
            res.redirect('/')
        }).catch(err => {
            res.status(400).send("Try again")
        })

    },
    deletePost: (req, res) => {
        const _id = req.params.id;
        Blog.findByIdAndDelete(_id).then(data => {
            res.redirect('/');
        }).catch(err => {
            res.status(400).send('Unable to delete')
        })

    }
}