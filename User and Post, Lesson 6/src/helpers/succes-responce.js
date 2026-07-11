export function successResponce(res, data, status = 200){
    return res.status(status).json({
        status: true,
        message: 'success',
        data: data
    })
}