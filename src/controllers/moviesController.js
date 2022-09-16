const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
            return res.render('moviesList', {
                movies
            })
        })
        .catch((error) => console.log(error))
    }
}