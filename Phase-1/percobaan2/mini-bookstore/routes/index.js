const router = require("express").Router();
const authorRouter = require("./authorRouter");
const bookRouter = require("./bookRouter");
const HomeController = require("../controllers/homeController");

router.get("/", HomeController.homePage);
router.use("/authors", authorRouter);
router.use("/books", bookRouter);

module.exports = router;
