const baseController = require('./baseController')

class ItemController extends baseController {
    constructor(model) {
        super(model)
    }
    sample(req, res) {
        // dummy
        return res.status(200).json({ success: 'this is only attainable in the items routes' })
    }

    async getByUserId(req,res){
        const { id } = req.body
        const output = await this.model.findByPk(id)
        return res.status(200).json({success: true, output})
    }



}

module.exports = ItemController;