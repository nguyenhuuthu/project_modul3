

module.exports.requireAuth = (req, res, next) => {
    // let {email, pass} = req.cookies
    if( Object.keys(req.signedCookies).length === 0) {
        res.redirect("/auth/login")
    } else {
        next()
    }
    // console.log(req.cookies);
    // console.log(req.signedCookies);
}

module.exports.notRequireAuth = (req, res, next) => {
    console.log(req.signedCookies)
    // let {email, pass} = req.cookies
    if( Object.keys(req.signedCookies).length !== 0) {
        res.redirect("/")
    } else {
        next()
    }
    // console.log(req.cookies);
    // console.log(req.signedCookies);
}

module.exports.requireAdmin = (req, res, next) => {
    // console.log(req.signedCookies);
    let {user_id} = req.signedCookies;
    if(req.signedCookies.role === "Admin"){
        next()
    }else if(req.signedCookies.role === "teacher"){
        res.redirect(`/users/${user_id}/course`)
    } else {
        res.redirect(`/users/${user_id}/user`)
    }
}