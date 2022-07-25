const router = require("express").Router();
const AuthorController = require("../controllers/authorController");

router.get("/", AuthorController.authorList);

module.exports = router;
