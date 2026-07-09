import Author from '../schema/author.schema.js'
import { ApiError } from '../utils/ApiError.js'

class AuthorController {
    async getAuthors(req, res){
        try {
            const authors = await Author.find()
            return res.status(200).json({authors})
        } catch (error) {
            return res.status(500).json('XATO')
        }
    }

    async postAuthor(req, res){
        try {
            const exists = await Author.findOne({nick: req.body.nick})
            
            if (exists){
                throw new ApiError('Nick already exists', 409)
            }

            const author = await Author.create(req.body)
            return res.status(201).json({author})

        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message: 'Internal server error' 
            }
            return res.status(err.statusCode).json({xato: err.message})
        }
    }

    async getAuthor(req, res){
        try {
            const author = await Author.findById(req.params.id)
            return res.status(200).json({author})
        } catch (error) {
            return res.status(500).json('XATO')
        }
    }

    async updateAuthor(req, res){
        try {
            const body = req.body
            const author = await Author.findByIdAndUpdate(req.params.id, body, {returnDocument: 'after'});

            if (!author){
                return res.status(404).json({err: '404 author is not defined'})
            }

            return res.status(200).json({author})
        } catch (error) {
            return res.status(500).json({err: "Internal error"})
        }
    }

    async deleteAuthor(req, res){
        try {
            const deleteedAuthor = Author.findByIdAndDelete()
        } catch (error) {
            return console.log(error)
        }
    }
}

export default new AuthorController()