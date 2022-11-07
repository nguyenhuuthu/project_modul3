

module.exports.requireAuth = (req, res, next) => {
    if (Object.keys(req.signedCookies).length === 0) {
        res.redirect("/auth/login")
    } else {
        next()
    }
}

module.exports.notRequireAuth = (req, res, next) => {
    if (Object.keys(req.signedCookies).length !== 0) {
        res.redirect("/")
    } else {
        next()
    }
}

module.exports.requireAdmin = (req, res, next) => {
    let { user_id } = req.signedCookies;
    if (req.signedCookies.role === "Admin") {
        next()
    } else {
        if (req.signedCookies.role === "teacher") {
            res.redirect(`/users/${user_id}/course`)
        } else {
            res.redirect(`/users/${user_id}/user`)
        }

    }
}