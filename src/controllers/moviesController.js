const db = require("../database/models/index");
const { Op } = require("sequelize");
module.exports = {
  list: async (req, res) => {
    let movies = await db.Movie.findAll();
    res.render("moviesList", { movies });
  },
  detail: async (req, res) => {
    let movie = await db.Movie.findByPk(req.params.id);
    res.render("moviesDetail", { movie });
  },
  new: async (req, res) => {
    let movies = await db.Movie.findAll({
      order: [["release_date", "DESC"]],
    });
    res.render("newestMovies", {movies});
  },
  recomended: async (req, res) => {
    let movie = await db.Movie.findAll({
      where: {
        rating: { [Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", { movie });
  },
};
