const customRes = (res ,statuscode , message , status, data=[])=>{
    return res.status(statuscode).json({
        status,
        message,
        data
    })
}

export default customRes


