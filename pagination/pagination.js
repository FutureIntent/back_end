

function pagination(Model) {
    return async (req, res, next) => {

        //starting parameters
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        let result = {};

        const count = await Model.findAndCountAll();

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

        //current page + results
        try {
            result.current = page;
            result.results = await Model.findAll({ offset: startIndex, limit: limit });
            res.paginatedResult = result;
            next();
        } catch (e) {
            res.json({ status: false, message: "Querry error" });
        }

    }
}


module.exports = pagination;