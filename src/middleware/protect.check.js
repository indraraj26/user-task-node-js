exports.checkProtectKey = (req, res, next) => {
    if(req.headers.hasOwnProperty('protect_key')) {
        console.log(req.headers.protect_key)
        if(req.headers.protect_key == '05c1f0534de526c320bc883af19e0d0b') {
            next()
        } else {
            return res.json({result: false, message: 'Invalid protect key' })
        }
    } else {
         res.json({result: false, message: "pass the protect key"})
    }
}