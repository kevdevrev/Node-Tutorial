exports.get404Page = (req,res,next) => {
    //status will set our status code.
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}