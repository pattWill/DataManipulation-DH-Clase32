const db = require("../database/models")

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
           .then((movies) => {
            res.render("moviesList", {movies})
           });      
    
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
        res.render("moviesDetail", {movie})
       });  
    },
    new: (req, res) => {
        
    },
    recomended: (req, res) => {

    },
    add: (req, res) => {  
        res.render("moviesAdd")
    },
    create: (req, res) => {  
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        });
        res.redirect("/movies")
    },
    edit:(req, res) => {  
        db.Movie.findByPk(req.params.id)
            .then((Movie) => {
            res.render("moviesEdit", {Movie})
           });  
    },
    update: (req, res) => {  
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
            }, 
            {
            where: {
                id: req.params.id,
            }
            }
        ); res.redirect("/movies/edit/" + req.params.id);
    },
    delete: (req, res) => {  

    },
    destroy: (req, res) => {  

    }

}

module.exports = moviesController;