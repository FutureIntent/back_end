const multer = require('multer');
const post_val = require('./../validation/post_validation.js');

//file storage parameters
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './public/post_images')
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

//file upload parameters
const upload = multer({
    storage: storage,

    //file size limit 10MB
    limits: { fileSize: 10 * 1024 * 1024 },

    fileFilter: async (req, file, cb) => {

        //validate body
        const { error } = await post_val.post_schema.validate(req.body);

        if (error) {
            cb(null, false);
            return cb(new Error(error.details[0].message));
        }

        //validate images amount
        if (req.files.length > 10) {
            cb(null, false);
            return cb(new Error('Maximum image amount is 10'));
        }

        //validate file extension
        if (file.mimetype != 'image/jpeg' && file.mimetype != 'image/jpg' &&
            file.mimetype != 'image/gif' && file.mimetype != 'image/png') {
            cb(null, false);
            return cb(new Error('Allowed image extensions are: ( .jpg .jpeg .png .gif )'));
        }
        cb(null, true);
    }
}).any('images');

module.exports = upload;