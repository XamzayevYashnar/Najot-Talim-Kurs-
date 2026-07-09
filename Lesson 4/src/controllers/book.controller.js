import Book from '../schema/book.schema.js'

class BookController {

    async getBooks(req, res){

        try {
            
            const books = await Book.find();

            if (books.length === 0){
                return res.status(200).json({msg: 'Admin tomonidam malumot kiritilgani yuq!'})
            }

            return res.status(200).json({books})

        } catch (error) {

            return res.status(500).json({err:'Error on getBooks!'})

        }
    }

    async getBook(req, res){

        try {
            
            const { id } = req.params

            if (!id){
                return res.status(409).json('Iltimos tug\'ri fomrmatdi kiriting!')
            }

            const book = await Book.findById(id)

            if (book.length === 0){
                return res.status(200).json({msg: 'Admin tomonidam malumot kiritilgani yuq!'})
            }

            return res.status(200).json({book})

        } catch (error) {
            res.status(500).json({err: 'Erron on getBook/id! ' + error.message})
        }
    }

    async postBook(req, res){
        try {

            const book = await Book.create(req.body)
            
            if (!book){
                return res.status(500).json({err: 'Error!'})
            }

            return res.status(201).json({book})

        } catch (error) {
            res.status(500).json({err: 'Erron on postBook ' + error.message})
        }
    }

    async putBook(req, res){
        try {
            const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})

            if (!updateBook){
                return res.status(404).json({err: '404 book is not defined'})
            }

            return res.status(200).json({updateBook})

        } catch (error) {
            res.status(500).json({err: 'Erron on putBook ' + error.message})
        }
    }

    async deleteBook(req, res){
        try {
            const book = await Book.findByIdAndDelete(req.params.id)
            return res.status(201).json({deleted: true, data: book})
        } catch (error) {
            res.status(500).json({err: 'Erron on putBook ' + error.message})
        }
    }

}

export default new BookController()