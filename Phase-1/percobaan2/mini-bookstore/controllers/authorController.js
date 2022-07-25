const { Author, Book } = require("../models");
class AuthorController {
  static authorList(request, response) {
    Author.findAll({})
      .then((res) => {
        response.render("authorList", { authors: res });
      })
      .catch((err) => {
        response.send(err);
      });
  }
}

module.exports = AuthorController;
