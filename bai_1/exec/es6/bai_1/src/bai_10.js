var title = "aaa";
var author = "bbb";
var pages = 5;
var book = {
    title: title,
    author: author,
    pages: pages,
    toString: function () {
        console.log("Title: ".concat(title, ", Author: ").concat(author, ", Pages: ").concat(pages));
    },
};
book.toString();
