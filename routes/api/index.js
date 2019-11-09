const router = require("express").Router();
const neededRoutes = require("./needs");
const offeredRoutes = require("./offers");
const counselMedical = require("./counsMeds");

router.use("/needed", neededRoutes);
router.use("/offered", offeredRoutes);
router.use("/counsmed", counselMedical);

module.exports = router;
