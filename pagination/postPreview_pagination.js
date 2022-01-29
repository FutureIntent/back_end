const Post = require('./../models/Post_model.js');
const PostImage = require('./../models/Post_Image_model.js');

function postPreview_pagination() {
    return async (req, res, next) => {

        //starting parameters
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        //create association
        Post.hasMany(PostImage, { foreignKey: 'post_id' });
        PostImage.belongsTo(Post, { foreignKey: 'post_id' });

        //initialize result
        let result = {};

        //count posts
        const count = await Post.findAndCountAll();

        //count total page number
        const pageCount = Math.ceil(parseInt(count.count) / parseInt(limit));

        //previous page
        if (startIndex > 0) {
            result.previous = {
                page: page - 1,
                limit: limit,
            };
        }

        //next page
        if (endIndex < count.count) {
            result.next = {
                page: page + 1,
                limit: limit,
            };
        }

        //current page + total page number + results
        try {
            result.current = {
                page: page,
                limit: limit
            };

            result.pageCount = {
                count: pageCount,
                limit: limit
            };

            //get association
            result.results = await Post.findAll({
                include: PostImage, offset: startIndex, limit: limit, order: [
                    ['createdAt', 'DESC']
                ]
            });

            //declare result
            res.paginatedResult = result;
            next();

        } catch (e) {
            res.json({ status: false, message: "Querry error" });
        }

    }
}


module.exports = postPreview_pagination;