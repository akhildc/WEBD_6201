const homeView = (req, res) =>{
    pageTitle = "Home Page"
    res.render('home', {
        pageTitle: pageTitle
    })
}

module.exports = {
    homeView
}