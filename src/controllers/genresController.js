const db = require('../database/models');
const Genre = require('../database/models/Genre')

module.exports = {
    list: (req, res) => {
        Genre.findAll()
            .then((genres) => {
                return res.render('genresList', {
                    genres
                })
            })
            .catch((error) => console.log(error));
    },
    detail: (req, res) => {
        Genre.findByPk(req.params.id)
            .then(genres => {
                return res.render('genresDetail', {
                    genre
                })
            })
            .catch((error) => console.log(error));
    }
}