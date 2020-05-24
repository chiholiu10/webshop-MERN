const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// create
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount, 
        editable: false
    });

    Post.create(post, (err) => {
        if(err) console.log(err)
        else {
            console.log("Inserted Item")
        }
    })
    res.redirect('/')
});

// read
router.get('/', async (req, res) => {
    Post.find({}, (err, productList) => {
        if(err) console.log(err);
        else {
            res.send(productList)
        }
    })
})

router.get('/product', async (req, res) => {
    Post.find({}, (err, productList) => {
        if(err) console.log(err);
        else {
            res.render('productPage.ejs', {products: productList})
        }
    })
})


// find
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({ message: err })
    }
})

// delete
router.delete('/:postId', async(req, res) => {
    Post.findOneAndDelete(req.params.postId, (err) => {
        if(err){
            res.send('error removing')
        }
        else {
            console.log('succesfully removesd')
            res.redirect('/');
        }
    })

});

// update 
router.patch('/amountUpdate/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.postId, 
            {$set: 
                {   
                    amount: req.body.amount
                },
            })
        res.json(updatedPost)
    } catch(err) {
        res.json({ message: err })
    }
})

// update 
router.patch('/textUpdate/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.postId, 
            {$set: 
                {   
                    title: req.body.title,
                    description: req.body.description
                },
            })
        res.json(updatedPost)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router;