const router = require("express").Router();
const hangsController = require("../../controllers/hangsController");

// Matches with "/api/books"
router.route("/")
  .get(hangsController.findAll)
  .post(hangsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(hangsController.findById)
  .put(hangsController.update)
  .delete(hangsController.remove);

module.exports = router;
