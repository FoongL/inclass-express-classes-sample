class BaseController {
    constructor(model) {
        this.model = model
    }
    async insertOne(req, res) {
        try {
            const { data } = req.body
            console.log(data)
            const createdAt = new Date()
            const updatedAt = new Date()
            const output = await this.model.create({...data, createdAt, updatedAt}) // {name: "pen", userId: 1, createdAt: new Date(), updatedAt: new Date()}
            return res.status(200).json({ success: true, output })
        } catch (err) {
            return res.status(400).json({ err: err.message })
        }

    }

    async getAll(req, res) {
        const output = await this.model.findAll()
        return res.status(200).json({ success: true, output })
    }



    get(req, res) {
        // dummy
        console.log(this.model)
        return res.status(200).json({ success: true })
    }

    post(req, res) {
        //dummy
        const { text } = req.body

        return res.status(200).json({ output: text })
    }


}

module.exports = BaseController;