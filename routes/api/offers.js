const router = require("express").Router();
const offeredController = require("../../controllers/offeredController");

// Matches with "/api/offered"
router.route("/")
    .get(offeredController.findAll)
    .post(offeredController.create);

// Matches with "/api/offered/:id"
router.route("/:id")
  .get(offeredController.findById)
  .put(offeredController.update)
  .delete(offeredController.remove);