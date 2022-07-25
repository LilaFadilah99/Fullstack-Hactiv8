const { Author, Book } = require("../models");
const { Op, where } = require("sequelize");

class BookController {
  static bookList(request, response) {
    let { title } = request.query;
    let opt = {
      include: [Author],
      order: [["updatedAt", "DESC"]],
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
    };

    if (title) {
      opt.where.title = {
        [Op.iLike]: `%${title}%`,
      };
    }
    Book.findAll(opt)
      .then((res) => {
        response.render("bookList", { books: res, bookData: true });
      })
      .catch((err) => {});
  }

  static addBook(request, response) {
    Author.findAll({})
      .then((res) => {
        response.render("addBooks", { authors: res });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static sumbitNewBook(request, response) {
    let { title, isbn, stock, price, author } = request.body;
    Book.create({ title, isbn, stock, price, AuthorId: author })
      .then((res) => {
        response.redirect("/books");
      })
      .catch((err) => {
        if (err.name === "SequelizeValidationError") {
          response.render("errors", { errors: err.errors });
        } else {
          response.send(err);
        }
      });
  }

  static buyBook(request, response) {
    let id = request.params.id;
    Book.increment(
      {
        stock: -1,
      },
      { where: { id } }
    )
      .then((res) => {
        response.redirect("/books");
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static emptyBookList(request, response) {
    Book.findAll({
      include: [Author],
      order: [["updatedAt", "DESC"]],
      where: {
        stock: {
          [Op.lt]: 1,
        },
      },
    })
      .then((res) => {
        response.render("bookList", { books: res, bookData: false });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static restockBook(request, response) {
    let id = request.params.id;
    Book.findAll({
      include: [Author],
      where: { id },
    })
      .then((res) => {
        response.render("restockBook", { book: res });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static saveRestockBook(request, response) {
    let id = request.params.id;
    let { stock } = request.body;
    Book.update(
      {
        stock,
      },
      { where: { id } }
    )
      .then((res) => {
        response.redirect("/books/emptyList");
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static deleteBook(request, response) {
    let id = request.params.id;
    Book.destroy({
      where: { id },
    })
      .then((res) => {
        response.redirect("/books/emptyList");
      })
      .catch((err) => {
        response.send(err);
      });
  }
}

module.exports = BookController;
