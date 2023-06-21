const db = require("../database/models/index");
module.exports={
    list: async (req, res) => {
        let genres = await db.Genre.findAll();
        res.render("genresList", { genres});
      },
    detail:async(req,res)=>{ 
    let genre = await db.Genre.findByPk(req.params.id);
    res.render("genresDetail", { genre });
          
    }
}