const router = require("express").Router();
const neededController = require("../../controllers/neededController");

// Matches with "/api/needed"
router.route("/")
    .get(neededController.findAll)
    .post(neededController.create);

// Matches with "/api/needed/:id"
router.route("/:id")
  .get(neededController.findById)
  .put(neededController.update)
  .delete(neededController.remove);