const router = require("express").Router();
const counsMedController = require("../../controllers/counsMedController");

// Matches with "/api/counsMed"
router.route("/")
    .get(counsMedController.findAll)
    .post(counsMedController.create);

// Matches with "/api/counsMed/:id"
router.route("/:id")
  .get(counsMedController.findById)
  .put(counsMedController.update)
  .delete(counsMedController.remove);

  module.exports = router;