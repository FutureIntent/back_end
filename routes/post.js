const express = require('express');
const router = express.Router();
const Post = require('./../models/Post_model.js');
const PostImage = require('./../models/Post_Image_model.js');
const upload = require('./../upload/post_image.js');
const multer = require('multer');
const pagination = require('./../pagination/pagination.js');
const postPreview_pagination = require('./../pagination/postPreview_pagination.js');
const isAdmin = require('./../auth/admin_auth.js');
const fs = require('fs');

//CREATE NEW POST
router.post('/create', isAdmin, (req, res) => {

    //validate images
    upload(req, res, async function (err) {

        if (err instanceof multer.MulterError) {
            return res.json({ status: "false", message: err.message })
        } else if (err) {
           return res.json({status: "false", message: err.message})
        }

        //save post in database
        const post = await Post.create({
            theme: req.body.theme,
            text: req.body.text
        });

        //save images in database
        req.files.map(async (image) => {

            let postImage = await PostImage.create({
                name: image.filename,
                post_id: post.id
            });

        });

        //send response
        return res.json({ status: true, message: "Post has been created" })
    })

})

//GET POST PREVIEWS
router.get('/postPreviews', postPreview_pagination(), async (req, res) => {

    /*//create association
    Post.hasMany(PostImage, { foreignKey: 'post_id' });
    PostImage.belongsTo(Post, { foreignKey: 'post_id' });

    const posts = await Post.findAll({ include: PostImage, offset: 0, limit: 3 });
    res.json(posts);
    */

    //paginated response
    res.json(res.paginatedResult);
});

//GET SPECIFIC POST
router.get('/postDetails/:id', async (req, res) => {

    //request id
    const id = req.params.id;

    //create association
    Post.hasMany(PostImage, { foreignKey: 'post_id' });
    PostImage.belongsTo(Post, { foreignKey: 'post_id' });

    //get post from model
    const post = await Post.findOne({ where: { id: id }, include: PostImage });

    //validate
    if (!post) return res.json({status: false, message: "Non existent post"});

    //send response
    res.json({ status: true, post:post });

});

//DELETE POST
router.delete('/deletePost/:id', isAdmin, async (req, res) => {

    //get post id
    const id = req.params.id;

    //delete post from db
    const deletePost = await Post.destroy({
        where: {
            id: id
        }
    });

    if (!deletePost) return res.json({status: false, message: "No post with requested id"});

    //find all associated images
    const images = await PostImage.findAll({
        where: {
            post_id: id
        }
    });

    //delete images
    images && await images.map((image) => {
        // delete a file
        fs.unlink(`./public/post_images/${image.name}`, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(image.name + " is deleted");
        });
    });

    //delete associated images from db
    const deletePostImage = await PostImage.destroy({
        where: {
            post_id: id
        }
    });

    //send response
    res.json({status: true, message: "Post has been deleted"});
});

router.post('/newModel', (req, res) => {
    Post.sync({ alter: true })
});
    
module.exports = router;