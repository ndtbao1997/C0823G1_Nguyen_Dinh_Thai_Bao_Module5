let title: string = "aaa";
let author: string = "bbb";
let pages: number = 5;

const book = {
  title,
  author,
  pages,
  toString() {
    console.log(`Title: ${title}, Author: ${author}, Pages: ${pages}`);
  },
};

book.toString();
