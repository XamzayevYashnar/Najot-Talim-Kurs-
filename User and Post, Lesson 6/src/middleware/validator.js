export function validator(schema){
    return (req, res, next)=>{
        const {error} = schema(req.body)

        if (error){
            return res.status(422).json({
                status: false,
                message: error.details[0].message
            })
        }

        next()
    }
}