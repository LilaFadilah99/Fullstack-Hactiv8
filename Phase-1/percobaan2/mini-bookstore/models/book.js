"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, { foreignKey: "AuthorId" });
    }
    static changeIsbn(data) {
      let title = data.title.replaceAll(" ", "_");
      let isbn = data.isbn;
      return `${title}${isbn}`;
    }
  }
  Book.init(
    {
      AuthorId: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Title tidak boleh kosong",
          },
        },
      },
      isbn: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "ISBN tidak boleh kosong",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Price tidak boleh kosong",
          },
          min: {
            args: 1,
            msg: "Price harus lebih dari 0",
          },
        },
      },

      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Stock tidak boleh kosong",
          },
          min: {
            args: 1,
            msg: "Stock harus lebih dari 0",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (data) => {
          data.isbn = Book.changeIsbn(data);
        },
      },
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
