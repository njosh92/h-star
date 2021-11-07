const GameController = require("../controllers/game.controller");



module.exports=function(app){
    app.get('/api/games',GameController.findAll);

    app.post('/api/games',GameController.create)

    app.get("/api/games/:id", GameController.getOne);
    // Update
    app.put("/api/games/:id", GameController.update);
    // Delete
    app.delete("/api/games/:id", GameController.delete);

    




}