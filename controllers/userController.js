const baseController = require('./baseController')

class UserController extends baseController {
    constructor(model) {
        super(model)
    }
    sample(req, res) {
        // dummy
        return res.status(200).json({ success: 'this is only attainable in the user routes' })
    }



}

module.exports = UserController;