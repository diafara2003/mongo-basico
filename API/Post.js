const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');
const {
    json
} = require('body-parser');


router.get('/', async (req, res) => {
    try {
        const lstpots = await Post.find();
        res.json(lstpots);
    } catch (error) {
        res.json({
            messaje: error
        })
    }
});

router.get('/:postid', async (req, res) => {
    const post = await Post.findById(req.params.postid);
    res.json(post);

});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json({
                message: error
            });

        })
});

router.delete('/:postid', async (req, res) => {
    const deletePost = await Post.remove({
        _id: req.params.postid
    });

    res.json(deletePost);
});

router.patch('/:postid', async (req, res) => {
    const updatePost = await Post.updateOne(
        {
        _id: req.params.postid
    }, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    });

    res.json(updatePost);
});

module.exports = router;