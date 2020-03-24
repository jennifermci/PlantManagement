const PlantController = require("../controllers/plant.controller")

module.exports = app =>{
    app.get("/api/plants", PlantController.findAllPlants);
    app.post("/api/plants/add", PlantController.addOnePlant);
    app.delete("/api/plants/delete/:id", PlantController.deleteOnePlant);
    app.get("/api/plants/:id", PlantController.getOnePlant);
    app.put("/api/plants/edit/:id", PlantController.updateOnePlant)
}