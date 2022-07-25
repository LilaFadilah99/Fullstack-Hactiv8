const router = require("express").Router();
const BookController = require("../controllers/bookController");

router.get("/", BookController.bookList);
router.get("/buy/:id", BookController.buyBook);
router.get("/add", BookController.addBook);
router.post("/add", BookController.sumbitNewBook);
router.get("/emptyList", BookController.emptyBookList);
router.get("/restock/:id", BookController.restockBook);
router.post("/restock/:id", BookController.saveRestockBook);
router.get("/delete/:id", BookController.deleteBook);

module.exports = router;
